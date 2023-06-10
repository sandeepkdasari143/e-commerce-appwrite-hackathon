import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const TextField = ({ label, onChange, value, name, placeholder, maxLength, helperText, readOnly, rows}) => {
    return (
        <div className={styles.textField}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            {rows ?
            <textarea
                className={styles.inputField}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
                required
                value={value}
                rows={rows}
                type="text"
                readOnly={readOnly}
            /> :
            <input
                className={styles.inputField}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
                required
                value={value}
                type="text"
                readOnly={readOnly}
            />}
            
            <p className={styles.helperMessage}>
                <HelpRoundedIcon className={styles.helpIcon} />
                <span>{helperText}</span>
            </p>
        </div>
    );
};
const styles = {
    textField: "flex flex-col gap-1 w-full",
    label: "font-semibold text-[#C026D3] text-sm",
    inputField: "px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 dark:focus:bg-gray-700 border dark:border-gray-600 border-gray-800 focus:border-[#C026D3] focus:bg-[#C026D3]/10 dark:focus:border-[#C026D3] font-semibold text-sm",
    helpIcon:"!text-sm",
    helperMessage: "flex items-center gap-1 text-xs dark:text-gray-500 font-semibold",
}
export default TextField;
