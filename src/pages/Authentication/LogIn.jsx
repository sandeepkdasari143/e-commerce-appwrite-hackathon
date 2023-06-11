import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useState } from 'react';
import AddButton from '../../components/buttons/AddButton';
import { Link, useNavigate } from 'react-router-dom';
import AppWriteAuth from '../../../appwrite-services/auth.service';
import { toast } from 'react-toastify';

const LogIn = () => {
    const auth = new AppWriteAuth();
    const navigate = useNavigate();
    const [loginInfo, setLogInInfo] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogInInfo({ ...loginInfo, [name]: value });
    }

    const logInTheUser = async(event) => {
        event.preventDefault();
        const sessionRes = await auth.signIn(loginInfo);
        try {
            const user = await auth.getUser();
            if (user) {
                navigate('/', { replace: true });
                toast.success("You have Logged In Successfully 😇")
            }
        } catch (error) {
            if (error.response)
                toast.error("Please LogIn with valid credentials 😥");
            navigate('/login', {replace: true});
        }
    }
    return (
        <main className='relative h-[100vh] w-[100vw] flex flex-col'>
            <section className="rounded-xl p-3 dark:bg-gray-900 border dark:border-gray-700 flex flex-col w-[400px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <h1 className='flex flex-col items-center dark:text-gray-400 text-gray-900 gap-3  p-3 mb-3 text-3xl font-extrabold title-case'>
                    LogIn
                    <span className="text-sm font-normal">
                        Don't have an acount?{" "}
                        <Link
                        className="text-[rgb(240,46,101)]"
                        to="/signup"
                        >
                        Register
                        </Link>
                    </span>
                </h1>
                <form onSubmit={logInTheUser}>
                    <div className={styles.form}>
                        <div className={styles.textField}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input className={styles.inputField}
                                id="email"
                                name="email"
                                placeholder='Enter your email address'
                                onChange={handleInputChange}
                                maxLength={30}
                                required
                                value={loginInfo.email}
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
                                placeholder='Enter your password address'
                                onChange={handleInputChange}
                                maxLength={30}
                                required
                                value={loginInfo.password}
                                type="password" />
                            <p className={styles.helperMessage}>
                                <HelpRoundedIcon className={styles.helpIcon}/>
                                <span>Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and be at least 8 characters long</span>
                            </p>
                        </div>
                        <AddButton type="submit">Log In</AddButton>
                    </div>
                </form>
            </section>
            <section className='h-[50%] w-full dark:bg-gray-700 pointer-events-none'>
                <pre className="text-6xl font-['Allura'] text-[rgb(240,46,101)] font-extrabold text-center pt-[70px]">Sandy 's  Store</pre>
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
export default LogIn;