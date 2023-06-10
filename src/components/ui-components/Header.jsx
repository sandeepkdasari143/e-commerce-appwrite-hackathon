import BecomeSeller from '../buttons/AddButton';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL, OPEN_SELLER_REGISTRATION_FORM } from '../../redux-store/modal.slice';
import ThemeSwitcher from "../buttons/ThemeSwitcher"
const Header = () => {
    const dispatch = useDispatch();
    const becomeSellerHandler = () => {
        dispatch(OPEN_MODAL());
        dispatch(OPEN_SELLER_REGISTRATION_FORM());
    }
    return (
        <>
            <header className={styles.headerWrapper}>
                <BecomeSeller onClickHandler={becomeSellerHandler}>Become Seller</BecomeSeller>
                <ThemeSwitcher />
            </header>
        </>
    )
}
const styles = {
    headerWrapper: "flex items-center justify-between px-5 transition-all duration-200 linear border-b-[1px] dark:border-gray-700 border-pink-200 h-[8vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100"
}
export default Header