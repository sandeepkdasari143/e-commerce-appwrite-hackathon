import React from "react";
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const ImageUpload = ({name, helperText, preview, onUpload}) => {
    
    return (
        <div className={styles.imageUploader}>
        <label htmlFor={name} className={styles.imageUploadLabel}>
            {preview ? (
            <img className={styles.imagePreview} src={preview} />
            ) : (
            <div className={styles.imagePreviewFallback}>
                <h1 className="">Image Preview</h1>
            </div>
            )}
            <h1 className={styles.labelText}>
            Click Anywhere To Upload
            <span className="font-bold text-[#C026D3]/60"> LOGO</span>
            </h1>
            <input
            className={styles.hiddenImageInput}
            id={name}
            accept="image/*"
            type="file"
            onChange={onUpload}
            />
        </label>
        <p className={styles.helperMessage}>
            <HelpRoundedIcon className={styles.helpIcon} />
            <span>{helperText}</span>
        </p>
        </div>
    );
};
const styles = {
    imageUploader: "flex flex-col gap-1",
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
export default ImageUpload;
