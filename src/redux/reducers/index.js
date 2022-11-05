import { combineReducers } from 'redux'
import favourites from './favouritesReducer.js'
import spells from './spellsReducer'

const rootReducer = combineReducers({
  favourites,
  spells,
})

export default rootReducer
