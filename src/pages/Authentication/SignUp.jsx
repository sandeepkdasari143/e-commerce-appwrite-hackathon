import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useState } from 'react';
import AddButton from '../../components/buttons/AddButton';
import { Link } from 'react-router-dom';
import AppWriteAuth from '../../../appwrite-services/auth.service';
import { HOME_URL } from '../../../appwrite-services/appWriteSecrets';

const SignUp = () => {
    const auth = new AppWriteAuth();

    const [signUpInfo, setSignUpInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpInfo({ ...signUpInfo, [name]: value });
    }

    const signUpTheUser = async(event) => {
        event.preventDefault();
        // const PAYLOAD = {
        //     email: signUpInfo.email,
        //     URL: HOME_URL
        // }
        const response = await auth.signUp(signUpInfo)
        return response
    }

    return (
        <main className='text-white relative h-[100vh] w-[100vw] flex flex-col'>
            <section className="rounded-xl p-3 bg-white dark:bg-gray-900 border border-pink-800 dark:border-gray-700 flex flex-col w-[400px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <h1 className='flex flex-col items-center gap-3 dark:text-gray-400 text-gray-900 p-3 mb-3 text-3xl font-extrabold title-case'>
                    Sign Up
                    <span className="text-sm font-normal">
                        Already have an acount?{" "}
                        <Link
                        className="text-[rgb(240,46,101)]"
                        to="/login"
                        >
                        LogIn
                        </Link>
                    </span>
                </h1>
                <form onSubmit={signUpTheUser}>
                    <div className={styles.form}>
                        <div className={styles.textField}>
                            <label className={styles.label} htmlFor="name">UseName</label>
                            <input className={styles.inputField}
                                id="name"
                                name="name"
                                placeholder='Enter your name'
                                onChange={handleInputChange}
                                maxLength={30}
                                required
                                value={signUpInfo.name}
                                type="name" />
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Please Enter your name...</span>
                            </p>
                        </div>
                        <div className={styles.textField}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input className={styles.inputField}
                                id="email"
                                name="email"
                                placeholder='Enter your email address'
                                onChange={handleInputChange}
                                maxLength={30}
                                required
                                value={signUpInfo.email}
                                type="email"/>
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Please Enter your valid Email address...</span>
                            </p>
                        </div>
                        <div className={styles.textField}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <input className={styles.inputField}
                                id="password"
                                name="password"
                                placeholder='Enter your password'
                                onChange={handleInputChange}
                                maxLength={30}
                                required
                                value={signUpInfo.password}
                                type="password" />
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and be at least 8 characters long</span>
                            </p>
                        </div>
                        <AddButton type="submit">Sign Up</AddButton>
                    </div>
                </form>
            </section>
            <section className='h-[50%] w-full bg-pink-100 dark:bg-gray-700 pointer-events-none'>
            <pre className="text-6xl font-['Allura'] text-[rgb(240,46,101)] font-extrabold text-center pt-[40px]">Sandy 's  Store</pre>
            </section>
            <section className='h-[50%] w-full dark:bg-gray-900 pointer-events-none'/>
        </main>
    )
}
const styles = {
    form: "p-3 flex flex-col gap-5",
    textField: "flex flex-col gap-1",
    label: "font-semibold text-[#C026D3] text-sm",
    inputField: "px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 dark:focus:bg-gray-700 border dark:border-gray-600 border-gray-800 focus:border-[#C026D3] focus:bg-[#C026D3]/10 dark:focus:border-[#C026D3] font-semibold text-sm dark:text-white text-black",
    helpIcon:"!text-sm",
    helperMessage: "flex items-start gap-1 text-xs dark:text-gray-500 font-semibold",
}
export default SignUp;