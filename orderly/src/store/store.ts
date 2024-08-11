//Redux
import { configureStore, combineReducers} from '@reduxjs/toolkit'
//Persist -- Cashing
import { persistStore,  persistReducer, FLUSH, REHYDRATE, PAUSE,PERSIST, PURGE,REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//Components
import productsSlice from './products/productsSlice'
import cartSlice from './cart/cartSlice'

//Using persist
//Only cashing items from cart 
//Not Cashing loading, ProductFullInfo
const cartPersistConfig = {
  key: 'cartSlice',
  storage,
  whitelist: ['items'],
}


//Combine Reducers
const rootReducer = combineReducers({
  productsSlice,
  cartSlice: persistReducer(cartPersistConfig, cartSlice)
})

const store = configureStore({
  reducer: rootReducer,
  
  //To ignore certain actions from this "Serializability Check".
  // Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const persistor = persistStore(store)
export {store, persistor}