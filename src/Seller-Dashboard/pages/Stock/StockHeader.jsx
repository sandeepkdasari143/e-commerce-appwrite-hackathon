import AddButton from '../../../components/buttons/AddButton'
import { useDispatch} from "react-redux";
import { OPEN_MODAL, OPEN_COLLECTION_FORM } from "../../../redux-store/modal.slice";

const StockHeader = () => {
    const dispatch = useDispatch();
    return (
        <div className="h-[20%] border-b dark:border-gray-800 border-pink-200 bg-white dark:bg-[rgb(27,27,39)] p-3 md:p-5 flex flex-col md:flex-row items-center justify-between">

            <div className='flex flex-col md:gap-2 items-center md:items-start'>
                <h1 className='font-extrabold dark:text-white text-gray-900 text-[40px]'>Collections</h1>
                <p className=' dark:text-gray-400 text-gray-600'>Register the <span className='font-bold text-[#BE185D]'>Seller Company</span> as a Collection.</p>
            </div>

            <AddButton onClickHandler={() => {
                dispatch(OPEN_COLLECTION_FORM())
                return dispatch(OPEN_MODAL())
                }}>
                <span>Register Collection</span>
            </AddButton>
        </div>
    )
}

export default StockHeader;