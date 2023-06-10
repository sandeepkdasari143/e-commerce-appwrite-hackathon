import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";
import Modaal from "../../../components/ui-components/Modal";
import ProductForm from "./ProductForm";
import StockHeader from "./StockHeader";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../../redux-store/modal.slice";
import CompanyForm from "./CompanyForm";
import ProductsGrid from "./ProductsGrid";
import CompanyGrid from "./CompanyGrid";

const Stock = () => {

    const dispatch = useDispatch();
    const {modalTitle, isModalOpen, isProductFormOpen, isCompanyFormOpen, isProductsGridOpen} = useSelector(state => state.modal);
    const CloseModal = () => dispatch(CLOSE_MODAL());

    return (
        <div className="transition-all duration-200 linear lg:h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-50">
            <DashboardHeader />
            <main className={styles.productsWrapper}>
                <DashboardSidebar />
                <section className={styles.productsContent}>
                    <StockHeader />
                    <CompanyGrid />
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
