import { Navigate } from "react-router-dom";
import AuthProtectedRoute from "./AuthProtectedRoute";

const SellerProtectedRoute = ({children}) => {
    const isSeller = true;
    if (isSeller) {
        return <AuthProtectedRoute>{children}</AuthProtectedRoute>
    }
    return <Navigate to="/" />
}

export default SellerProtectedRoute;