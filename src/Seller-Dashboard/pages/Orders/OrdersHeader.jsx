import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import { NavLink } from 'react-router-dom';
import TableViewRoundedIcon from '@mui/icons-material/TableViewRounded';

const OrdersHeader = () => {
    return (
        <nav className={styles.mapNavBar}>
            <NavLink className={({ isActive }) => isActive ? `${styles.mapNavLink} bg-pink-700 dark:bg-gray-700 text-white dark:text-white` : styles.mapNavLink} to="/seller/orders/mapView">
                <span><FmdGoodRoundedIcon className="text-2xl"/></span>
                <span>View On Map</span>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.mapNavLink} bg-pink-700 dark:bg-gray-700 text-white dark:text-white` : styles.mapNavLink} to="/seller/orders/gridView">
                <span><TableViewRoundedIcon className="text-2xl"/></span>
                <span>Data Grid View</span>
            </NavLink>
        </nav>
    )
}
const styles = {
    mapNavBar: "z-10 flex items-center gap-2 border dark:border-gray-800 border-pink-300 bg-pink-100 dark:bg-[rgb(27,27,39)] p-2 rounded-full absolute left-[50%] -translate-x-1/2 top-4",
    mapNavLink: "transition-all duration-500  linear rounded-full dark:text-white text-gray-800 font-semibold text-sm uppercase border dark:border-gray-800 border-pink-300 py-1 md:py-2 px-3 flex items-center justify-start gap-1 hover:dark:bg-gray-700 font-bold"
}
export default OrdersHeader