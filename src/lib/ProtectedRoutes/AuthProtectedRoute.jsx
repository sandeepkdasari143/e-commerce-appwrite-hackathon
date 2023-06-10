import { useNavigate } from "react-router-dom";
import AppWriteAuth from "../../../appwrite-services/auth.service";
import { useState } from "react";
import { toast } from "react-toastify";

const AuthProtectedRoute = ({ children }) => {
    const [JWT, setJWT] = useState(null)
    const navigate = useNavigate();
    verifyIsUserLoggedIn()
    async function verifyIsUserLoggedIn() {
        try {
            const auth = new AppWriteAuth();
            const JWTRes = await auth.createJWT();
            setJWT(JWTRes.jwt);
        } catch (error) {
            if(error.response)
            toast.error("Please LogIn to acess requested page :)");
            return navigate("/login")
        }
    }
    if (JWT) return children;
    if(!JWT) return (
        <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-2">
            <h1>Loading...</h1>
        </div>
    )
}

export default AuthProtectedRoute;