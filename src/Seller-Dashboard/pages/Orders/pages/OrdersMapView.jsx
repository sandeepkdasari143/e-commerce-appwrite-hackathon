import React from 'react';
import { useSelector } from 'react-redux';
import { orderData } from '../lib/mockOrderData';
import PushPinIcon from '@mui/icons-material/PushPin';
import { Map, Marker } from 'react-map-gl';
import { getCenter } from 'geolib';

const OrdersMapView = () => {

    const mode = useSelector(store => store.theme.mode);

    const { VITE_APP_MAPBOX_ACCESS_TOKEN, VITE_APP_MAPBOX_LIGHT_THEME, VITE_APP_MAPBOX_DARK_THEME } = import.meta.env;

    const coordinates = orderData.map(order => ({
        longitude: order.location.longitude,
        latitude: order.location.latitude,
    }))
    const centralCoordinate = getCenter(coordinates);

    const [viewPort, setViewPort] = React.useState({
        latitude: centralCoordinate.latitude,
        longitude: centralCoordinate.longitude,
        zoom: 5,
    });

    const onExploringMap = React.useCallback(evt => setViewPort(evt.viewPort), []);

    const markers = React.useMemo(() => orderData.map(order => (
        <Marker
            key={order.id}
            latitude={order.location.latitude}
            longitude={order.location.longitude}
            offsetLeft={1.5 * viewPort.zoom}
            offsetTop={3 * viewPort.zoom}
        >
            <PushPinIcon className='text-red-500 text-4xl animate-bounce transition-all '/>
        </Marker>
    )), [orderData]);

    return (
        <Map
            reuseMaps
            style={{width:'100%', height:'92vh'}}
            onMove={onExploringMap}
            {...viewPort}
            mapboxAccessToken={VITE_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle={mode === "dark" ? VITE_APP_MAPBOX_DARK_THEME : VITE_APP_MAPBOX_LIGHT_THEME}
        >
            {markers}
        </Map>
    )
}

export default OrdersMapView