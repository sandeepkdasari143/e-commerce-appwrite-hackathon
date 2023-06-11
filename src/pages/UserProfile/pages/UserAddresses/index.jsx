import UserSidebar from "../../components/UserSidebar";
import UserAddressesGrid from "./UserAddressesGrid";
import UserAddressesHeader from "./UserAddressesHeader";
const UserAddresses = () => {
    return (
        <main className={styles.wrapper}>
            <UserSidebar />
            <section className={styles.contentContainer}>
                <UserAddressesHeader />
                <UserAddressesGrid />
            </section>
        </main>
    )
}
const styles = {
    wrapper: "md:h-[92vh] h-full flex flex-col md:flex-row",
    contentContainer: "transition-all duration-200 linear h-full md:h-[92vh] md:w-[70%] lg:w-[85%] w-[100vw] dark:bg-[rgb(20,20,31)] bg-[#FDF4FF]"
}
export default UserAddresses;