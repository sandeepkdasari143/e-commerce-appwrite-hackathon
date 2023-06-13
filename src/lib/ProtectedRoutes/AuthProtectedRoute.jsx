import { useNavigate } from "react-router-dom";
import AppWriteAuth from "../../../appwrite-services/auth.service";
import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_DETAILS } from "../../redux-store/auth.slice";
import { SET_IS_SELLER, SET_SELLER_DETAILS } from '../../redux-store/auth.slice';
import AppWriteTeams from '../../../appwrite-services/teams.service';
import AppWriteDB from "../../../appwrite-services/database.service";
import { ECOMM_DB_ID, SELLERS_ID } from "../../../appwrite-services/appWriteSecrets";


const AuthProtectedRoute = ({ children }) => {

    const user = useSelector(store => store.auth.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = new AppWriteAuth();
    const team = new AppWriteTeams()
    const db = new AppWriteDB();
    
    React.useEffect(() => {
        checkUserSession();
        async function checkUserSession() {
            try {
                const user = await auth.getUser();
                if (user) {
                    const teamMembers = await team.getAllMembers("SELLERS");
                    if (teamMembers?.total > 0) {
                        teamMembers?.memberships?.map(async(team) => {
                            if (team.userEmail === user.email) {
                                const query = {
                                    key: 'sellerEmail',
                                    value: team.userEmail,
                                }
                                dispatch(SET_IS_SELLER(true));
                                const sellerDetails = await db.getDocsByEqualQuery(ECOMM_DB_ID, SELLERS_ID, query);
                                if (sellerDetails) {
                                    dispatch(SET_SELLER_DETAILS(sellerDetails[0]))
                                }
                            }
                        })
                    }
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