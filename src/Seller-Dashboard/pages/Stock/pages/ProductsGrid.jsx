import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { SET_PRODUCTS } from "../../../../redux-store/sellerStore.slice";
import ProductCard from "../components/ProductCard";

const ProductsGrid = () => {
  const [searchParams] = useSearchParams();
  const collectionID = searchParams.get("collectionID");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.adminStore.products);

  React.useEffect(() => {
    const fetchProductByCollectionID = async () => {
      
    };
    return fetchProductByCollectionID;
  }, [collectionID]);

  return (
    <div className="w-[73vw] h-[600px] p-2">
      <div className="w-full h-full flex flex-wrap items-start justify-start gap-3 overflow-auto">
        {products &&
          products?.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
