import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
    persistStore,
    persistReducer,
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import { combineReducer } from "./contacts/redusers";
import authReducer from './auth/auth-slice';

const middleware = [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
    }), 
    logger,
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: combineReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };