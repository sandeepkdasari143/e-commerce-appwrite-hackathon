import { useDispatch } from "react-redux";
import RegisterSeller from "../../../components/buttons/AddButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  OPEN_SELLER_REGISTRATION_FORM,
} from "../../../redux-store/modal.slice";
import TextField from "../../../components/ui-components/TextField";
import { useState } from "react";

const SellerLogInForm = () => {
  const dispatch = useDispatch();
  const [newSeller, setNewSeller] = useState({
    sellerEmail: "",
    sellerName: "",
    sellerDescription: "",
    sellerLogo: {},
  });
  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setNewSeller({ ...newSeller, [name]: value });
  };
  
  const openSellerRegistrationForm = () => {
    dispatch(CLOSE_MODAL());
    dispatch(OPEN_SELLER_REGISTRATION_FORM());
    dispatch(OPEN_MODAL());
  };

  const LogInSeller = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={LogInSeller}>
      <h1 className="px-3">
        Don't have an Account?
        <span
          onClick={openSellerRegistrationForm}
          className="text-fuchsia-500 font-bold cursor-pointer ml-2 hover:underline"
        >
          Register as Seller
        </span>
      </h1>
      <div className={styles.form}>
        <TextField
          name="sellerEmail"
          onChange={handleTextFieldChange}
          value={newSeller.sellerEmail}
          label={"Seller Email"}
          pattern={"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}"}
          helperText={"Enter You valid Email."}
        />
        <TextField
          name="sellerPassword"
          onChange={handleTextFieldChange}
          value={newSeller.sellerPassword}
          label={"Seller Password"}
          pattern={"(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}"}
          helperText="Please Enter Seller Password."
        />
      </div>
      <footer className={styles.footerButtons}>
        <SecondaryButton onClick={() => dispatch(CLOSE_MODAL())}>
          Cancel
        </SecondaryButton>
        <RegisterSeller type="submit">Go To Dashboard</RegisterSeller>
      </footer>
    </form>
  );
};

const styles = {
  form: "p-3 mt-5 flex flex-col gap-5 w-[400px] overflow-auto",
  footerButtons: "p-3 flex items-center justify-end gap-5",
  imageUploadLabel:
    "relative px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 border-dashed border-[#C026D3] border-2 dark:border-[#C026D3] font-semibold text-xl flex items-center justify-between",
  imagePreviewFallback:
    "h-[100px] w-[100px] object-cover rounded-xl border-dashed border-2 border-[#C026D3] dark:border-[#C026D3] dark:text-white/50 text-gray-700/50 dark:bg-gray-700 text-gray-700 flex items-center justify-center text-center text-sm",
  imagePreview: "h-[100px] w-[100px] object-cover rounded-xl ",
  labelText: "text-sm text-gray-800/60 dark:text-white/60",
  hiddenImageInput: "hidden absolute inset-x-0 inset-y-0",
};

export default SellerLogInForm;
