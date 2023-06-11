import { toast } from "react-toastify";
import { appwriteClient } from ".";
import {Functions} from 'appwrite';

class AppWriteFunction {
    functions
    constructor() {
        this.functions = new Functions(appwriteClient);
    }

    async ExecuteFunc(FUNCTION_ID, PAYLOAD) {
        try {
            // console.log(FUNCTION_ID, PAYLOAD)
            let response = await this.functions.createExecution(FUNCTION_ID, PAYLOAD);
            response = JSON.parse(response.response);
            console.log(response)
            if(response?.error === true) return toast.error(response.message)
            if (response?.success === true) {
                toast.success(response.message);
                return response;
            }
        } catch (error) {
            console.log(error)
            // console.log("ERROR:: FUNCTIONS :: ExecuteFunc:: ", error.message);
            console.log("ERROR:: FUNCTIONS :: ExecuteFunc:: ", error.response);
        }
    }
}

export default AppWriteFunction;