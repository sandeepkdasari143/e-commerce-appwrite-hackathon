import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import OrdersHeader from "./OrdersHeader";
import OrdersSidebar from "./OrdersSidebar";
const Orders = () => {
  return (
    <div className="transition-all duration-200 linear lg:h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-50">
      <DashboardHeader />
      <main className={styles.ordersWrapper}>
        <OrdersSidebar />
        <section className={styles.ordersContent}>
          <OrdersHeader />
          <div>
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};
const styles = {
  ordersWrapper: "relative flex flex-col md:flex-row",
  ordersContent:
    "absolute inset-0 transition-all duration-200 linear h-full md:h-[92vh] md:w-[70%] lg:w-[100%] w-[100vw] dark:bg-[rgb(20,20,31)] bg-[#FDF4FF]",
};
export default Orders;
