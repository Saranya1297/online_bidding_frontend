import { takeEvery } from 'redux-saga/effects';
import ApiConstants from '../../apiConstants';
import { loginApiSaga, registrationSaga } from './simpleSaga';

export default function* rootSaga() {
    yield takeEvery(ApiConstants.API_LOGIN_LOAD, loginApiSaga);
    yield takeEvery(ApiConstants.API_REGISTER_LOAD, registrationSaga)
}