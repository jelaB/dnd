import { applyMiddleware, combineReducers, createStore } from 'redux'
import spells from './reducers/spellsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  spells,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default rootReducer
