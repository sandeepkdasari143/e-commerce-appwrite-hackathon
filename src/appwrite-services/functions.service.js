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
            let response = await this.functions.createExecution(FUNCTION_ID, JSON.stringify(PAYLOAD));
            response = JSON.parse(response.response);
            console.log(response)
            return response;
        } catch (error) {
            console.log(error)
            // console.log("ERROR:: FUNCTIONS :: ExecuteFunc:: ", error.message);
            console.log("ERROR:: FUNCTIONS :: ExecuteFunc:: ", error.response);
        }
    }
}

export default AppWriteFunction;