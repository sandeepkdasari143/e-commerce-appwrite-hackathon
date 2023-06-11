import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { SET_PRODUCTS } from '../../../redux-store/sellerStore.slice';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
    const [searchParams] = useSearchParams();
    const collectionID = searchParams.get('collectionID');

    const dispatch = useDispatch();
    const products = useSelector(state => state.adminStore.products);
    // const [products, setProducts] = useState([]);

    React.useEffect(() => {
        const fetchProductByCollectionID = async () => {
            const axiosData = await axios.get(`http://localhost:3690/api/v1/products/collectionID/${collectionID}`);
            if (axiosData.data && axiosData.data.success === true) {
                dispatch(SET_PRODUCTS(axiosData.data.products));
                // console.log(axiosData?.data);
                // setProducts([...products, ...axiosData.data.products]);
            }
        }
        fetchProductByCollectionID();
        return fetchProductByCollectionID;

    }, [collectionID]);

    return (
        <div className="w-[73vw] h-[600px] p-2">
            <div className='w-full h-full flex flex-wrap items-start justify-start gap-3 overflow-auto'>
                {products && products?.map((product) => (
                    <ProductCard key={product._id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default ProductsGrid