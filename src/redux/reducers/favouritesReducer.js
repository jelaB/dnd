import {
  getFavouriteIndex,
  isFavourite,
  storageSet,
} from '../../util/storageUtil'

export default function favouritesReducer(state, action) {
  let index = -1
  let favourites

  switch (action.type) {
    case 'ADD_TO_FAV':
      if (!isFavourite(action.spell.index)) {
        favourites = [...state, action.spell]
        storageSet('favourites', JSON.stringify(favourites))
      }
      return favourites
    case 'REMOVE_FROM_FAV':
      index = getFavouriteIndex(action.spell.index)
      if (index > -1) {
        favourites = [
          ...favourites.slice(0, index),
          ...favourites.slice(index + 1),
        ]
        storageSet('favourites', JSON.stringify(favourites))
      }
      return favourites
    default:
      return state !== undefined ? state : []
  }
}
