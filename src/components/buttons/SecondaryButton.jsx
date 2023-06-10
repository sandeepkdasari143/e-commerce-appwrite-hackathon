
const SecondaryButton = ({children, onClick}) => {
    return (
        <button onClick={onClick}
            className='dark:text-white font-semibold ouline-none border dark:border-gray-800 border-pink-300 text-gray-800 rounded-lg dark:bg-[rgba(27,27,39,0.9)] dark:hover:bg-gray-700 dark:active:bg-[rgba(27,27,39)] bg-pink-100 active:bg-pink-100 hover:bg-pink-200 px-3 py-2 flex gap-3 items-center'>
            {children}
        </button>
    )
}

export default SecondaryButton