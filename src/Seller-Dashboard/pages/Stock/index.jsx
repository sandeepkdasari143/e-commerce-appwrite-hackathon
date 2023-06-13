import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";
import Modaal from "../../../components/ui-components/Modaal";
import ProductForm from "./components/ProductForm";
import StockHeader from "./components/StockHeader";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../../redux-store/modal.slice";
import CompanyForm from "./components/CompanyForm";
import ProductsGrid from "./pages/ProductsGrid";
import CompanyGrid from "./pages/CompanyGrid";
import { Outlet } from "react-router-dom";

const Stock = () => {
    const dispatch = useDispatch();
    const {
        modalTitle,
        isModalOpen,
        isProductFormOpen,
        isCompanyFormOpen,
        isProductsGridOpen,
    } = useSelector((state) => state.modal);
    const CloseModal = () => dispatch(CLOSE_MODAL());

    return (
        <div className="transition-all duration-200 linear lg:h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-50">
        <DashboardHeader />
        <main className={styles.productsWrapper}>
            <DashboardSidebar />
            <section className={styles.productsContent}>
            <StockHeader />
            <div className="h-[80%] flex gap-3 flex-col md:flex-row items-center justify-between w-[100%] p-3">
                <CompanyGrid />
                <Outlet />       
            </div>
            </section>
        </main>

        <Modaal
            modalTitle={modalTitle}
            isModalOpen={isModalOpen}
            CloseModal={CloseModal}
        >
            {isProductFormOpen && <ProductForm />}
            {isCompanyFormOpen && <CompanyForm />}
            {isProductsGridOpen && <ProductsGrid />}
        </Modaal>
        </div>
    );
};
const styles = {
    productsWrapper: "flex flex-col md:flex-row",
    productsContent: "transition-all duration-200 linear h-full md:h-[92vh] md:w-[70%] lg:w-[85%] w-[100vw] dark:bg-[rgb(20,20,31)] bg-[#FDF4FF]",
};
export default Stock;
