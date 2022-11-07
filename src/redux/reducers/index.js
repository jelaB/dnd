import { combineReducers } from 'redux'
import spells from './spellsReducer'

const rootReducer = combineReducers({
  spells,
})

export default rootReducer
