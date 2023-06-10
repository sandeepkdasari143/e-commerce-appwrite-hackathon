import Sidebar from './Sidebar'
import Products from './Products'

const Home = () => {
    return (
        <main className={styles.homeWrapper}>
            <Sidebar />
            <Products />
        </main>
    )
}
const styles = {
    homeWrapper: "transition-all duration-200 linear h-[92vh] w-[100vw] flex"
}
export default Home