
const AddButton = ({ children, type, onClickHandler }) => {
    return (
        <button onClick={onClickHandler}
            className={styles.primaryBtn} type={type}>
            
            {children}
        </button>
    )
}

const styles = {
    primaryBtn : "md:text-md flex items-center justify-center text-white font-semibold ouline-none border-none rounded-lg bg-gradient-to-br from-[#DB2777] hover:from-[#A21CAF] via-[#A21CAF] hover:via-[#DB2777] to-[#7E22CE] hover:to-[#7E22CE] active:from-[#DB2777] active:via-[#A21CAF] active:to-[#DB2777] px-3 py-2 flex gap-1 items-center",
}
export default AddButton