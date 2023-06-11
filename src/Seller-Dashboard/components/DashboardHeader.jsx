import { Link } from "react-router-dom";
import ThemeSwitcher from "../../components/buttons/ThemeSwitcher"
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

const DashboardHeader = () => {
    return (
        <header className={styles.headerWrapper}>
                <Link to="/" className="bg-clip-text text-transparent flex items-center gap-3 font-bold text-3xl bg-gradient-to-br from-[#DB2777] hover:from-[#A21CAF] via-[#A21CAF] hover:via-[#DB2777] to-[#7E22CE] hover:to-[#7E22CE] active:from-[#DB2777] active:via-[#A21CAF] active:to-[#DB2777]">
                    <span>
                        <ShoppingBasketRoundedIcon className="text-[#A21CAF] scale-125 -mt-2"/>
                    </span>
                    Sandy's <span className="font-normal">Store</span>
                </Link>
            <ThemeSwitcher />
        </header>
    )
}

const styles = {
    headerWrapper: "transition-all duration-200 linear border-b-[1px] dark:border-gray-800 border-pink-100 h-[8vh] w-[100%] dark:bg-[rgb(20,20,31)] bg-white px-5 flex items-center justify-between"
}

export default DashboardHeader