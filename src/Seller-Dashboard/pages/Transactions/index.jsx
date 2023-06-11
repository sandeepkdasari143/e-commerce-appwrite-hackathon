import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'
const Transactions = () => {
    return (
        <div className='transition-all duration-200 linear lg:h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-50'>
            <DashboardHeader />
            <main className={styles.trasactionsWrapper}>
                <DashboardSidebar />
                <section className={styles.trasactionsContent}>

                </section>
            </main>
        </div>
    )
}
const styles = {
    trasactionsWrapper: "flex flex-col md:flex-row",
    trasactionsContent: "transition-all duration-200 linear h-full md:h-[92vh] md:w-[70%] lg:w-[85%] w-[100vw] dark:bg-[rgb(20,20,31)] bg-[#FDF4FF]",
}
export default Transactions