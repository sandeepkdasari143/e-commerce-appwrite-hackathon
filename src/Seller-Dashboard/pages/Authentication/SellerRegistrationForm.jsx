import { useSelector, useDispatch } from "react-redux";
import RegisterSeller from "../../../components/buttons/AddButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { CLOSE_MODAL, OPEN_MODAL, OPEN_SELLER_LOGIN_FORM } from "../../../redux-store/modal.slice";
import TextField from "../../../components/ui-components/TextField";
import { useState } from "react";
import ImageUpload from "../../../components/ui-components/ImageUpload";
import AppWriteFunction from "../../../../appwrite-services/functions.service";
import { ADD_SELLER_TO_TEAM_FUNCTION_ID } from "../../../../appwrite-services/appWriteSecrets";
import { useNavigate } from "react-router-dom";


const SellerRegistrationForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector(store => store.auth.user?.email);

  const [newSeller, setNewSeller] = useState({
    sellerEmail: userEmail,
    sellerName: "",
    sellerDescription: "",
    // sellerLogo: {}
  });

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setNewSeller({ ...newSeller, [name]: value });
  }

  const [companyLogoPreview, setCompanyLogoPreview] = useState("");
    const imageUploadEvent = (e) => {
      const logo = e.target.files[0];
      setCompanyLogoPreview(URL.createObjectURL(logo));
      setNewSeller({ ...newSeller, sellerLogo: logo });
  }
  
  const openSellerLogInForm = () => {
    dispatch(CLOSE_MODAL());
    dispatch(OPEN_SELLER_LOGIN_FORM());
    dispatch(OPEN_MODAL());
  }

  const registerSeller = async(event) => {
    event.preventDefault();
    const funct = new AppWriteFunction();
    const response = await funct.ExecuteFunc(ADD_SELLER_TO_TEAM_FUNCTION_ID, JSON.stringify(newSeller));

    if (response) {
      
    }
  }

  return (
    <form onSubmit={registerSeller}>
      <h1 className="px-3">Already have Seller Account?
        <span onClick={openSellerLogInForm}
          className="text-fuchsia-500 font-bold cursor-pointer ml-2 hover:underline">
          LogIn
        </span>
      </h1>
      <div className={styles.form}>
        <TextField name="sellerEmail" value={newSeller.sellerEmail} label={"Seller Email"} readOnly={true} helperText={"To Change the Email, LogIn back with your business email."}/>
        <TextField name="sellerName" onChange={handleTextFieldChange} value={newSeller.sellerName} label={"Seller Name"} helperText="Please Enter Seller Name in 50 Characters" maxLength={50}/>
        <TextField name="sellerDescription" onChange={handleTextFieldChange} value={newSeller.sellerDescription} label={"Seller Description"} helperText="Please Enter Seller Description in 500 Characters" maxLength={500} rows={4} />
        {/* <ImageUpload onUpload={imageUploadEvent} preview={companyLogoPreview} name="sellerLogo" helperText={"Please Upload Seller Logo"}/> */}
      </div>
      <footer className={styles.footerButtons}>
        <SecondaryButton onClick={() => dispatch(CLOSE_MODAL())}>
          Cancel
        </SecondaryButton>
        <RegisterSeller type="submit">Register Me</RegisterSeller>
      </footer>
    </form>
  );
};
const styles = {
  form: "p-3 mt-5 flex flex-col gap-5 w-[400px] h-[500px] overflow-auto",
  footerButtons: "p-3 flex items-center justify-end gap-5",
  imageUploadLabel:
    "relative px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 border-dashed border-[#C026D3] border-2 dark:border-[#C026D3] font-semibold text-xl flex items-center justify-between",
  imagePreviewFallback:
    "h-[100px] w-[100px] object-cover rounded-xl border-dashed border-2 border-[#C026D3] dark:border-[#C026D3] dark:text-white/50 text-gray-700/50 dark:bg-gray-700 text-gray-700 flex items-center justify-center text-center text-sm",
  imagePreview: "h-[100px] w-[100px] object-cover rounded-xl ",
  labelText: "text-sm text-gray-800/60 dark:text-white/60",
  hiddenImageInput: "hidden absolute inset-x-0 inset-y-0",
};
export default SellerRegistrationForm;
