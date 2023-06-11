import { useNavigate } from "react-router-dom";
import AppWriteAuth from "../../../appwrite-services/auth.service";
import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_DETAILS } from "../../redux-store/auth.slice";

const AuthProtectedRoute = ({ children }) => {

    const user = useSelector(store => store.auth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = new AppWriteAuth();

    React.useEffect(() => {
        checkUserSession();
        async function checkUserSession() {
            try {
                const user = await auth.getUser();
                if (user) {
                    dispatch(SET_USER_DETAILS(user));
                }
            } catch (error) {
                if (error.response)
                navigate("/login", { replace: true })
                toast.error("Please LogIn to access requested page 😥");
            }
        }
    }, []);

    if (user) return children;
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-2">
            <h1>Loading...</h1>
        </div>
    )
}

export default AuthProtectedRoute;