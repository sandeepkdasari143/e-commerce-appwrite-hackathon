import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/ui-components/Header";
import { useDispatch, useSelector } from "react-redux";
import Modaal from "./components/ui-components/Modaal";
import { CLOSE_MODAL } from "./redux-store/modal.slice";
import SellerRegistrationForm from "./Admin-Dashboard/pages/Authentication/SellerRegistrationForm";
import SellerLogInForm from "./Admin-Dashboard/pages/Authentication/SellerLogInForm";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const {modalTitle, isModalOpen, isSellerRegistrationFormOpen, isSellerLogInFormOpen} = useSelector(state => state.modal);
  const CloseModal = () => dispatch(CLOSE_MODAL());

  return (
    <div className="h-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100">
      <Header />
      <main>
        <Outlet />
        
      </main>

      {/* Modal opening */}
      <Modaal
        modalTitle={modalTitle}
        isModalOpen={isModalOpen}
        CloseModal={CloseModal}
            >
              {isSellerRegistrationFormOpen && <SellerRegistrationForm />}
              {isSellerLogInFormOpen && <SellerLogInForm />}
      </Modaal>
    </div>
  );
};

export default HomeLayout;