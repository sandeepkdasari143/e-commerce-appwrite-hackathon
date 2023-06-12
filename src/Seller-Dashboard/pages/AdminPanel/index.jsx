
import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

const AdminPanel = () => {

    return (
        <div className='transition-all duration-200 linear h-[100vh] w-[100%] dark:bg-[rgb(20,20,31)] bg-pink-50'>
            <DashboardHeader />
            <main className={styles.panelWrapper}>
                <DashboardSidebar />
                <section className={styles.panelContent}>
                    
                </section>
            </main>
        </div>
    )
}
const styles = {
    panelWrapper: "flex md:felx-col",
    panelContent: "transition-all duration-200 linear h-[92vh] md:w-[70%] lg:w-[85%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100",
}
export default AdminPanel