import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
import storeConfiguration from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

const store = storeConfiguration()
const root = createRoot(document.getElementById('root'))

root.render(
    <ReduxProvider store={store}>
    <Router>
        <App/>
    </Router>
    </ReduxProvider>
)
