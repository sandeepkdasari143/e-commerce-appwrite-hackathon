import { NavLink } from "react-router-dom"
import useNavConfig from "../../hooks/useNavConfig";


const OrdersSidebar = () => {
    const navBar = useNavConfig();
    // console.log(navBar[0].navIcon())
    return (
        <section className={styles.sidebarWrapper}>
            <nav className={styles.navBar}>
                {
                    navBar?.map((nav, index) => (
                        <NavLink key={index} className={({ isActive }) => isActive ? `${styles.navLink} bg-pink-200 dark:bg-gray-500` : styles.navLink} to={nav.href}>
                            <span><nav.navIcon /></span>
                            <span>{nav.navTitle}</span>
                        </NavLink>
                    ))
                }
            </nav>
        </section>
    )
}

const styles = {
    sidebarWrapper: "z-20 rounded-2xl m-5 transition-all duration-200 linear border md:border-r-[1px] flex items-center md:items-start dark:text-white text-gray-800 dark:border-gray-800 border-pink-100 md:w-[20%] lg:w-[15%] w-[100vw] dark:bg-black/30 bg-white/30 backdrop-blur-sm",

    navBar: "flex flex-wrap md:flex-col gap-2 md:gap-3 my-7 mx-1 md:mx-auto",

    navLink: "transition-all duration-500  linear rounded-md dark:text-white text-gray-700 font-semibold text-sm uppercase dark:hover:bg-gray-700 hover:bg-pink-200 border-none outline-none py-1 md:py-2 px-3 flex items-center justify-start gap-2 md:gap-5",

}

export default OrdersSidebar