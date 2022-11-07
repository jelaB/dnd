import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
// import storeConfiguration from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
import rootReducer from './redux/reducers'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { storageRemove } from './util/storageUtil'

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
const root = createRoot(document.getElementById('root'))

root.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
)

window.addEventListener('beforeunload', () => {
  storageRemove('favourites')
})
if (window.performance) {
  console.info('window.performance is supported')
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    console.info('This page is reloaded')
    storageRemove('favourites')
  }
}
