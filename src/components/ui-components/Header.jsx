import React from 'react'

const Header = () => {
    return (
        <header className={styles.headerWrapper}></header>
    )
}
const styles = {
    headerWrapper: "transition-all duration-200 linear border-b-[1px] dark:border-gray-700 border-pink-200 h-[8vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100"
}
export default Header