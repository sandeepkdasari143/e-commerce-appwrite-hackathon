import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'
const Transactions = () => {
    return (
        <div className='transition-all duration-200 linear h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100'>
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
    trasactionsWrapper: "flex md:felx-col",
    trasactionsContent: "transition-all duration-200 linear h-[92vh] md:w-[70%] lg:w-[85%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100",
}
export default Transactions