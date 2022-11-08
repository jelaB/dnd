import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux'

const root = createRoot(document.getElementById('root'))

root.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
)
