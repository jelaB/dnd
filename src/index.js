import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
// import storeConfiguration from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
import rootReducer from './redux/reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); const root = createRoot(document.getElementById('root'))

root.render(
    <ReduxProvider store={store}>
    <Router>
        <App/>
    </Router>
    </ReduxProvider>
)
