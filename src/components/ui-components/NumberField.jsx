import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const NumberField = ({ label, onChange, value, name, placeholder, min, max}) => {
    return (
        <div className={styles.NumberField}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <input
                className={styles.inputField}
                id={name}
                name={name}
                min={min}
                max={max}
                placeholder={placeholder}
                onChange={onChange}
                required
                value={value}
                type="number"
            />
            <p className={styles.helperMessage}>
                <HelpRoundedIcon className={styles.helpIcon} />
                <span>Please Enter Your Company Name in 30 Characters</span>
            </p>
        </div>
    );
};
const styles = {
    NumberField: "flex flex-col gap-1 w-full",
    label: "font-semibold text-[#C026D3] text-sm",
    inputField: "px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 dark:focus:bg-gray-700 border dark:border-gray-600 border-gray-800 focus:border-[#C026D3] focus:bg-[#C026D3]/10 dark:focus:border-[#C026D3] font-semibold text-sm",
    helpIcon:"!text-sm",
    helperMessage: "flex items-center gap-1 text-xs dark:text-gray-500 font-semibold",
}
export default NumberField;
