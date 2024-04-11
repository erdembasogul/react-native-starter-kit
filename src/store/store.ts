import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    preloadedState: {},
});

export default store;
