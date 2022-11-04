import { combineReducers } from 'redux'
import favourites from './SpellReducer.js'

const rootReducer = combineReducers({
  favourites
})

export default rootReducer
