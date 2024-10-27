import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducer';
import rootSaga from './store/saga';

//Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//Configure the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) //Add saga middleware
});

//Run the root saga
sagaMiddleware.run(rootSaga);

export default store;