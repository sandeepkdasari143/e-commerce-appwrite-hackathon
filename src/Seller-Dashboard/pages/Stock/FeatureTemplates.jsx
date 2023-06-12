import { useSelector } from "react-redux"
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';

const FeatureTemplates = () => {
    const collections = useSelector(state => state.adminStore.collections)
    if (collections.length === 0) return (
        <span className='h-full w-[50%] flex flex-wrap bg-pink-50 dark:bg-[rgb(27,27,39)] border dark:border-gray-800 border-pink-200 rounded-md gap-5 items-center justify-evenly p-5 dark:text-white font-bold text-3xl overflow-hidden'><HourglassEmptyRoundedIcon className="text-gray-400/30 text-[200px] animate-ping scale-200"/></span>
    )
    return (
        <div className="h-full w-[50%] bg-pink-50 dark:bg-[rgb(27,27,39)] border dark:border-gray-800 border-pink-200 rounded-lg">
            <div className='h-full overflow-auto w-full flex flex-wrap gap-5 justify-center py-5'>
                
            </div>
        </div>
    )
}

export default FeatureTemplates