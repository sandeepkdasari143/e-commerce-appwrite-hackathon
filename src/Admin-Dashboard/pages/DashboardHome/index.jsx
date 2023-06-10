
import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

const DashboardHome = () => {

    return (
        <div className='transition-all duration-200 linear h-[100vh] w-[100%] dark:bg-[rgb(20,20,31)] bg-pink-50'>
            <DashboardHeader />
            <main className={styles.dashboardWrapper}>
                <DashboardSidebar />
                <section className={styles.dashboardContent}>
                
                </section>
            </main>
        </div>
    )
}
const styles = {
    dashboardWrapper: "flex md:felx-col",
    dashboardContent: "transition-all duration-200 linear h-[92vh] md:w-[70%] lg:w-[85%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100",
}
export default DashboardHome