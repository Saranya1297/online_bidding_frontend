import ApiConstants from "../../apiConstants";

function loginAction(payload) {
    try {
        const action = {
            type: ApiConstants.API_LOGIN_LOAD,
            payload
        }
        return action;
    } catch (err) {
        console.log("Error in loginAction::", err)
    }
}

function registerAction(payload) {
    try {
        const action = {
            type: ApiConstants.API_REGISTER_LOAD,
            payload
        }
        return action;
    } catch (err) {
        console.log("Error in RegisterAction::", err);
    }
}

export {
    loginAction,
    registerAction
}