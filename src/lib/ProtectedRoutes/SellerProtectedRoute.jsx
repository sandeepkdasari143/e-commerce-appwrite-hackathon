import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SellerProtectedRoute = ({ children }) => {
    const {isSeller} = useSelector(store => store.auth);
    if (isSeller) {
        return children
    }
    return <Navigate to="/" />
}

export default SellerProtectedRoute;