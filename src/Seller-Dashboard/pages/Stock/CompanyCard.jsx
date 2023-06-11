import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from "@mui/material";
import AddButton from '../../../components/buttons/AddButton';
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { OPEN_MODAL, OPEN_PRODUCT_FORM, OPEN_PRODUCTS_GRID } from "../../../redux-store/modal.slice";

const CompanyCard = ({_id, collectionName, collectionDescription, collectionLogo}) => {
    const dispatch = useDispatch();
    const displayAllProducts = () => {
        navigate(`/admin/stock?collectionID=${_id}`);
        dispatch(OPEN_PRODUCTS_GRID());
        return dispatch(OPEN_MODAL())
    }
    
    const openCompanyForm = () => {
        navigate(`/admin/stock?collectionID=${_id}`);
        dispatch(OPEN_PRODUCT_FORM());
        return dispatch(OPEN_MODAL())
    }
    const navigate = useNavigate();
    return (
        <article className={styles.companyCard}>
            <div className={styles.companyDetailsWrapper}>
                <div className={styles.companyDetails}>
                    <img className={styles.companyImage} src={collectionLogo?.secureURL} alt="" />
                    <div className="flex flex-col items-start gap-1 p-1">
                        <h1 className={styles.companyTitle}>{collectionName}</h1>
                        <p className={styles.companyDesc}>{collectionDescription}</p>
                    </div>
                </div>
                <IconButton title='Delete'><DeleteRoundedIcon className={styles.DeleteIcon}/></IconButton>
            </div>
            <div className={styles.buttons}>
                <SecondaryButton onClickHandler={displayAllProducts}>All Products</SecondaryButton>
                <AddButton onClickHandler={openCompanyForm}>Create Product</AddButton>
            </div>
        </article>
    )
}
const styles = {
    companyCard: "relative group cursor-pointer p-3 rounded-xl border dark:border-gray-800 border-pink-200 hover:border-pink-300 h-[200px] w-[400px] flex flex-col gap-5 justify-between dark:bg-[rgb(27,27,39)] dark:hover:bg-gray-800 hover:bg-pink-50 bg-white",
    companyDetailsWrapper: "flex justify-between items-start",
    companyDetails: "flex gap-5",
    companyImage: "w-[80px] h-[80px] rounded-xl object-cover",
    companyTitle: "font-bold dark:text-gray-300 text-gray-900",
    companyDesc: "dark:text-gray-500 text-gray-500 font-semibold text-xs line-clamp-3",
    DeleteIcon: "absolute top-1 right-1 hidden group-hover:flex transition-all duration-1000 linear text-3xl cursor-pointer text-red-600 hover:text-red-500 hover:scale-125",
    buttons: "flex items-center justify-center gap-5"
}
export default CompanyCard