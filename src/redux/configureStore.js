import { configureStore, compose } from '@reduxjs/toolkit'
import rootReducer from './reducers'

export default function storeConfiguration (initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return configureStore({ reducer: rootReducer, enhancers: composeEnhancers() })
}
