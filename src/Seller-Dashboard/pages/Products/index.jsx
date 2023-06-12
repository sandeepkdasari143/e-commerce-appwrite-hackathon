import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";
import ProductsHeader from "./ProductsHeader";
const Products = () => {
    return (
        <div className="transition-all duration-200 linear lg:h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-50">
        <DashboardHeader />
        <main className={styles.ordersWrapper}>
            <DashboardSidebar />
            <section className={styles.ordersContent}>
            <ProductsHeader />
            <div>
                <Outlet />
            </div>
            </section>
        </main>
        </div>
    );
};
const styles = {
  ordersWrapper: "flex flex-col md:flex-row",
  ordersContent:
    "relative transition-all duration-200 linear h-full md:h-[92vh] md:w-[70%] lg:w-[85%] w-[100vw] dark:bg-[rgb(20,20,31)] bg-[#FDF4FF]",
};
export default Products;
