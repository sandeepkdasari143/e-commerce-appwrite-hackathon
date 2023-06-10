import { appwriteClient } from ".";
import { Account, ID } from 'appwrite';
import { toast } from 'react-toastify';
import { HOME_URL, LOGIN_URL } from "./appWriteSecrets";

class AppWriteAuth{
    auth
    navigate
    constructor() {
        this.auth = new Account(appwriteClient);
    }

    async signUp(PAYLOAD) {
        try {
            const { email, password, name } = PAYLOAD;
            const response = await this.auth.create(ID.unique(), email, password, name);
            console.log(response);
        } catch (error) {
            const errorResponse = error.response;
            if (errorResponse?.type === "user_already_exists") {
                toast.error("Email already exists, Kindly LogIn :)")
            }
        }
    }

    async signIn(PAYLOAD) {
        try {
            const { email, password} = PAYLOAD;
            const response = await this.auth.createEmailSession(email, password);
            console.log(response);
        } catch (error) {
            console.log("ERROR in creatSession():: ", error.response)
            toast.error(error.message);
        }
    }

    async SignInWithGoogle() {
        try {
            const response = await this.auth.createOAuth2Session('google', HOME_URL, LOGIN_URL);
            console.log(response);
        } catch (error) {
            console.log("ERROR in SignInWithGoogle():: ", error.response)
            toast.error(error.message);
        }
    }

    async createMagicSession(PAYLOAD) {
        try {
            const {email, URL } = PAYLOAD;
            const response = await this.auth.createMagicURLSession(ID.unique(), email, URL);
            console.log(response);
        } catch (error) {
            const errorResponse = error.response;
            if(errorResponse?.type === "user_already_exists")
            toast.error("Email already exists, Kindly LogIn :)");
        }
    }

    async createJWT() {
        const response = await this.auth.createJWT();
        // console.log(response)
        return response;
        
    }

    async logOut() {
        try {
            const response = await this.auth.deleteSession('current');
            console.log(response)
        } catch (error) {
            console.log("ERROR in createJWT():: ", error.response)
            toast.error(error.message);
        }
    }

}

export default AppWriteAuth;