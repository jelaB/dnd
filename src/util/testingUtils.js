import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../redux'

export const MockedReduxProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <Router>{children}</Router>
    </ReduxProvider>
  )
}

export const renderWithRedux = (ui, options) =>
  render(ui, { wrapper: MockedReduxProvider, ...options })
