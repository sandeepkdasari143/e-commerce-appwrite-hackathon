import { useDispatch } from 'react-redux';
import AddButton from '../../../../components/buttons/AddButton';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
const UserAddressesHeader = () => {
    const dispatch = useDispatch();
    return (
        <div className="h-[20%] border-b dark:border-gray-800 border-pink-200 bg-white dark:bg-[rgb(27,27,39)] p-3 md:p-5 flex flex-col md:flex-row items-center justify-between">

            <div className='flex flex-col md:gap-2 items-center md:items-start'>
                <h1 className='font-extrabold dark:text-white text-gray-900 text-[40px]'>Your Registered Addresses</h1>
                <p className=' dark:text-gray-400 text-gray-600'>Create the <span className='font-bold text-[#BE185D]'>Address</span> and use it in your next order.</p>
            </div>

            <AddButton>
                <span><AddLocationRoundedIcon className='text-white text-xl'/></span>
                <span>Create Address</span>
            </AddButton>
        </div>
    )
}

export default UserAddressesHeader