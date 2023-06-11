import React from 'react'
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import AddButton from '../../../components/buttons/AddButton';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../../redux-store/modal.slice';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const CompanyForm = () => {
    const dispatch = useDispatch();
    
    const [newCollection, setNewCollection] = React.useState({
        collectionName: "",
        collectionDescription: "",
        collectionLogo: {}
    });

    const createCollection = async(event) => {
        event.preventDefault();
        // dispatch(ADD_COLLECTION());
        dispatch(CLOSE_MODAL())
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCollection({ ...newCollection, [name]: value });
    }

    const [companyLogoPreview, setCompanyLogoPreview] = React.useState("");
    const imageUploadEvent = (e) => {
        const logo = e.target.files[0];
        setCompanyLogoPreview(URL.createObjectURL(logo));
        setNewCollection({...newCollection, collectionLogo: logo});
    }
    return (
        <>
            <div>
                <form onSubmit={createCollection}>
                    <div className={styles.form}>
                        <div className={styles.textField}>
                            <label className={styles.label} htmlFor="companyName">Company Name</label>
                            <input className={styles.inputField}
                                id="companyName"
                                name="collectionName"
                                placeholder='Company Name'
                                onChange={handleInputChange}
                                maxLength={30}
                                required
                                value={newCollection.collectionName}
                                type="text" />
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Please Enter Your Company Name in 30 Characters</span>
                            </p>
                        </div>
                        <div className={styles.textField}>
                            <label className={styles.label} htmlFor="companyDescription">Company Description</label>
                            <textarea className={styles.inputField}
                                id="companyDescription"
                                name="collectionDescription"
                                placeholder='Company Description'
                                onChange={handleInputChange}
                                maxLength={500}
                                value={newCollection.collectionDescription}
                                rows={2}
                                type="text" />
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Describe your Company in 500 characters.</span>
                            </p>
                        </div>

                        <div className={styles.textField}>
                            <label htmlFor="companyLogo" className={styles.imageUploadLabel}>
                                {
                                    companyLogoPreview ? 
                                        <img className={styles.imagePreview}
                                            src={companyLogoPreview} /> :
                                        <div className={styles.imagePreviewFallback}>
                                        <h1 className=''>Image Preview</h1>
                                    </div>
                                }
                                <h1 className={styles.labelText}>Click Anywhere To Upload
                                    <span className='font-bold text-[#C026D3]/60'> LOGO</span>
                                </h1>
                                <input className={styles.hiddenImageInput}
                                id="companyLogo" accept="image/*" type='file'
                                onChange={imageUploadEvent}/>
                            </label>
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Click Anywhere in above area to upload Company Logo</span>
                            </p>
                        </div>
                    </div>
                    <footer className={styles.footerButtons}>
                        <SecondaryButton onClick={()=>dispatch(CLOSE_MODAL())}>Cancel</SecondaryButton>
                        <AddButton type="submit">Add In Collection</AddButton>
                    </footer>
                </form>        
            </div>
        </>
    )
}
const styles = {
    form: "p-3 flex flex-col gap-5 w-[400px]",

    textField: "flex flex-col gap-1",
    label: "font-semibold text-[#C026D3] text-sm",
    inputField: "px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 dark:focus:bg-gray-700 border dark:border-gray-600 border-gray-800 focus:border-[#C026D3] focus:bg-[#C026D3]/10 dark:focus:border-[#C026D3] font-semibold text-sm",
    helpIcon:"!text-sm",
    helperMessage: "flex items-center gap-1 text-xs dark:text-gray-500 font-semibold",

    footerButtons: "p-5 flex items-center justify-end gap-5",
    imageUploadLabel: 'relative px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 border-dashed border-[#C026D3] border-2 dark:border-[#C026D3] font-semibold text-xl flex items-center justify-between',
    imagePreviewFallback: 'h-[100px] w-[100px] object-cover rounded-xl border-dashed border-2 border-[#C026D3] dark:border-[#C026D3] dark:text-white/50 text-gray-700/50 dark:bg-gray-700 text-gray-700 flex items-center justify-center text-center text-sm',
    imagePreview: 'h-[100px] w-[100px] object-cover rounded-xl ',
    labelText: 'text-sm text-gray-800/60 dark:text-white/60',
    hiddenImageInput: 'hidden absolute inset-x-0 inset-y-0',
}

export default CompanyForm