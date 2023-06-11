import BecomeSeller from '../buttons/AddButton';
import LogOutBTN from '../buttons/AddButton';
import Profile from '../buttons/AddButton';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL, OPEN_SELLER_REGISTRATION_FORM } from '../../redux-store/modal.slice';
import ThemeSwitcher from "../buttons/ThemeSwitcher"
import { LOG_OUT } from '../../redux-store/auth.slice';
import { useNavigate } from 'react-router-dom';
import AppWriteAuth from '../../../appwrite-services/auth.service';
import { toast } from 'react-toastify';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = new AppWriteAuth();
    const loggedInUserID = useSelector(store => store.auth.currentUser?.$id);

    const openSellerRegistrationForm = () => {
        dispatch(OPEN_MODAL());
        dispatch(OPEN_SELLER_REGISTRATION_FORM());
    }

    const handleLogOut = async() => {
        try {
            await auth.logOut();
            dispatch(LOG_OUT());
            navigate('/login', { replace: true });
            toast.success("You have Logged Out Successfully 😇")
        } catch (error) {
            if (error.response)
                console.log(error.response);
            toast.error("Couldn't log out! :(");
        }
    }

    const openUserProfile = () => {
        navigate(`/user/${loggedInUserID}/profile`)
    }

    return (
        <>
            <header className={styles.headerWrapper}>
                <BecomeSeller onClickHandler={openSellerRegistrationForm}>Become Seller</BecomeSeller>
                <ThemeSwitcher />
                <div>
                    <Profile onClickHandler={openUserProfile}>My Profile</Profile>
                </div>
                <LogOutBTN onClickHandler={handleLogOut}>Log Out</LogOutBTN>
            </header>
        </>
    )
}
const styles = {
    headerWrapper: "flex items-center justify-between px-5 transition-all duration-200 linear border-b-[1px] dark:border-gray-700 border-pink-200 h-[8vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100"
}
export default Header