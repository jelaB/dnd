import { isFavourite } from '../../util/storageUtil'

const initialState = {
  spellList: [],
  favourites: [],
  spellDetails: {},
}

export default function spellsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_SPELL_LIST':
      return {
        ...state,
        spellList: action.spellList,
      }
    case 'LOAD_FAV_LIST':
      return {
        ...state,
        favourites: [...state.favourites, ...action.favList],
      }
    case 'LOAD_SPELL_DETAILS':
      return {
        ...state,
        spellDetails: {
          ...state.spellDetails,
          [action.spellDetails.index]: action.spellDetails,
        },
      }
    case 'ADD_TO_FAV': {
      if (!isFavourite(action.spell)) {
        const spellToUpdate = {
          ...state.spellDetails[action.spell],
          favourite: true,
        }

        return {
          ...state,
          spellDetails: {
            ...state.spellDetails,
            [action.spell]: spellToUpdate,
          },
          favourites: [...state.favourites, action.spell],
        }
      }
      return state
    }
    case 'REMOVE_FROM_FAV': {
      const updatedFavourites = [...state.favourites].filter(
        (item) => item !== action.spell
      )
      const spellToUpdate = {
        ...state.spellDetails[action.spell],
        favourite: false,
      }

      return {
        ...state,
        spellDetails: {
          ...state.spellDetails,
          [action.spell]: spellToUpdate,
        },
        favourites: [...updatedFavourites],
      }
    }
    default:
      return state
  }
}
