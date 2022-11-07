import {
  getFavouriteIndex,
  isFavourite,
  storageSet,
} from '../../util/storageUtil'

const initialState = {
  spellList: [],
  favourites: [],
  spellDetails: {},
}

export default function spellsReducer(state = initialState, action) {
  let index
  let favourites
  switch (action.type) {
    case 'LOAD_SPELL_LIST':
      return {
        ...state,
        spellList: action.spellList,
      }
    case 'LOAD_SPELL_DETAILS':
      return {
        ...state,
        spellDetails: {
          ...state.spellDetails,
          [action.spellDetails.index]: action.spellDetails,
        },
      }
    case 'ADD_TO_FAV':
      if (!isFavourite(action.spell.index)) {
        state.spellDetails[action.spell.index].favourite = true
        favourites = [...state.favourites, action.spell.index]
        storageSet('favourites', JSON.stringify(favourites))
        return {
          ...state,
          favourites: [...state.favourites, action.spell.index],
        }
      }
      return state

    case 'REMOVE_FROM_FAV':
      index = getFavouriteIndex(action.spell.index)
      if (index > -1) {
        state.favourites = [
          ...state.favourites.slice(0, index),
          ...state.favourites.slice(index + 1),
        ]
        storageSet('favourites', JSON.stringify(state.favourites))
      }
      return state
    default:
      return state
  }
}
