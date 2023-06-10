import { appwriteClient } from ".";
import { Account, ID } from 'appwrite';
import { toast } from 'react-toastify';
import { HOME_URL, LOGIN_URL } from "./appWriteSecrets";

class AppWriteAuth{
    auth
    constructor() {
        this.auth = new Account(appwriteClient);
    }

    async createAccount(PAYLOAD) {
        try {
            const { email, password, name } = PAYLOAD;
            const response = await this.auth.create(ID.unique(), email, password, name);
            console.log(response);
        } catch (error) {
            console.log("ERROR in createAcc():: ", error.response)
            toast.error(error.message);
        }
    }

    async creatSession(PAYLOAD) {
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

    async creatMagicSessionForNewUser(PAYLOAD) {
        try {
            const {email, URL } = PAYLOAD;
            const response = await this.auth.createMagicURLSession(ID.unique(), email, URL);
            console.log(response);
        } catch (error) {
            console.log("ERROR in creatMagicSession():: ", error.response)
            toast.error(error.message);
        }
    }

    async createJWT() {
        try {
            const response = await this.auth.createJWT();
            console.log(response)
        } catch (error) {
            console.log("ERROR in createJWT():: ", error.response)
            toast.error(error.message);
        }
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