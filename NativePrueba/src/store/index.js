import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native'
import rootReducer   from '../reducers';


const persistConfig = {
    key: "root",    
    storage: AsyncStorage,
    blacklist: ['rosID']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
);

let persistor = persistStore(store);

export {
  store,
  persistor,
};