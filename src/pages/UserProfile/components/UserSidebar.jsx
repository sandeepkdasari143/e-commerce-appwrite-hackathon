import { NavLink } from 'react-router-dom';
import useUserProfileNav from '../hooks/useUserProfileNav.js'

const UserSidebar = () => {
    const navBar = useUserProfileNav();
    return (
        <section className={styles.sidebarWrapper}>
            <nav className={styles.navBar}>
                {
                    navBar?.map((nav, index) => (
                        <NavLink key={index} className={({ isActive }) => isActive ? `${styles.navLink} bg-pink-200 dark:bg-gray-700` : styles.navLink} to={nav.href}>
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
    sidebarWrapper: "transition-all duration-200 linear border-b md:border-r-[1px] flex items-center md:items-start dark:text-white text-gray-800 dark:border-gray-800 border-pink-100 md:h-[92vh] md:w-[30%] lg:w-[15%] w-[100vw] dark:bg-[rgb(20,20,31)] bg-white",

    navBar: "flex flex-wrap md:flex-col gap-2 md:gap-3 my-7 mx-3 md:mx-auto",

    navLink: "transition-all duration-500  linear rounded-md dark:text-white text-gray-700 font-semibold text-sm uppercase dark:hover:bg-gray-700 hover:bg-pink-200 border-none outline-none py-1 md:py-2 px-3 flex items-center justify-start gap-2 md:gap-5",

}
export default UserSidebar