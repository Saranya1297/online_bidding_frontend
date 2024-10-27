import ApiConstants from "../../apiConstants";

const initialState = {
    onLoad: false,
    loginSuccess: null,
    onRegLoad: false,
    registrationSuccess: null,
};

function simpleReducer(state = initialState, action) {
    try {
        switch(action?.type) {
            case ApiConstants.API_LOGIN_LOAD:
                return {
                    ...state,
                    onLoad: true
                }
            case ApiConstants.API_LOGIN_SUCCESS:
                return {
                    onLoad: false,
                    loginSuccess: action.result
                }
            case ApiConstants.API_REGISTER_LOAD:
                return {
                    ...state,
                    onRegLoad: true
                }
            case ApiConstants.API_REGISTER_SUCCESS:
                return {
                    onRegLoad: false,
                    registrationSuccess: action?.result
                }
            default: 
                return state; //Return current state for unrecongnized action types
        }
    } catch (err) {
        console.log("Error in SimpleReducer ::", err);
    }
}

export default simpleReducer;