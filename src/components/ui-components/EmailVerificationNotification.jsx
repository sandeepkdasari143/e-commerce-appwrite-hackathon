import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import { useSelector } from 'react-redux';

const EmailVerificationNotification = () => {
    const { sellerEmail } = useSelector(store => store.auth.currentSeller);
    return (
        <div className='p-3 w-[500px] flex flex-col items-center justify-center gap-2'>
            <span><MarkEmailReadRoundedIcon className='text-green-500 text-[80px] animate-bounce'/></span>
            <p className='text-center font-semibold dark:text-white text-gray-900 text-lg'>Verification Email is Sent Successfully to <br />
                <span className='font-extrabold text-xl animate-pulse text-green-600'>{sellerEmail}</span> !</p>
        </div>
    )
}

export default EmailVerificationNotification