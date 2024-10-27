import { put, call, takeEvery } from 'redux-saga/effects';
import ApiConstants from '../../apiConstants';
import { message } from 'antd'
import simpleAxiosApi from '../http/loginHttp/loginAxiosApi';

export function* loginApiSaga(action) {
    try {
        const result = yield call(simpleAxiosApi.loginAPi, action.payload);
        if (result.status == 1) {
            yield put({
                type: ApiConstants.API_LOGIN_SUCCESS,
                result: result.result.data,
                status: result.status,
            });
        } else {
            console.log("Error in Login APi::", result)
        }
    } catch (err) {
        console.log("Error in loginApiSaga ::", err)
    }
} 

export function* registrationSaga(action) {
    try {
        const result = yield call(simpleAxiosApi.registerApi, action?.payload);
        if (result?.status == 1) {
            yield put({
                type: ApiConstants.API_REGISTER_SUCCESS,
                status: result.status,
                result: result?.result?.data
            });
        } else {
            console.log("Error in Register APi::", result)
        }
    } catch (err) {
        console.log("Error in RegistrationSaga::", err);
    }
}