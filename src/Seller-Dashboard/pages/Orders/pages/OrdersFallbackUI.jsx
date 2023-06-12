import { Navigate } from "react-router-dom"

const OrdersFallbackUI = () => {
    return <Navigate to={"/seller/orders/mapView"} />
}

export default OrdersFallbackUI