import {getSpellByID, getSpells} from '../../services/dndService'
import * as spellActions from '../actions/spellActions'
import {loadFavouriteSpells, loadSpellDetails, loadSpellList} from '../actions/spellActions'
import {addToFav, getFavouriteSpells, isFavourite, removeFromFav,} from '../../util/storageUtil'

/**
 * Fetch spell list via API if redux doesn't have it stored.
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const fetchSpellList = () => {
  return async (dispatch, getState) => {
    const {spells} = getState()

    if (spells.spellList.length === 0) {
      const spellList = await getSpells()
      dispatch(loadSpellList(spellList))
    }
  }
}
/**
 * Fetch spell detail via API for a provided index
 * if it is not stored in the redux state object.
 * @param spellIndex
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const fetchSpellDetails = (spellIndex) => {
  return async (dispatch, getState) => {
    const {spells} = getState()

    if (spells.spellDetails[spellIndex] === undefined) {
      const spell = await getSpellByID(spellIndex)
      dispatch(loadSpellDetails(mapSpellDetailsToIncludeFavouriteState(spell)))
    }
  }
}

/**
 * Handle favourite spells. Favourite spells are stored on two places
 * in localStorage, and in redux state object. For cases where redux state
 * object is empty, but local storage contains info about favourites,
 * this function populates redux state with info from local storage,
 * and also keeps in track to have spell details for every favourite id.
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const fetchFavs = () => {
  return async (dispatch, getState) => {
    const {spells} = getState()

    const favStorage = getFavouriteSpells()
    if (favStorage.length > spells.favourites.length) {
      const filteredFav = favStorage.filter((fav) => {
        return !spells.favourites.includes(fav)
      })
      const promises = filteredFav.map((fav) => {
        return dispatch(fetchSpellDetails(fav))
      })
      Promise.all(promises).then(() =>
          dispatch(loadFavouriteSpells(filteredFav))
      )
    }
  }
}

/**
 * Update redux and local storage favourite array
 * with new spell index.
 * @param index
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const addToFavourites = (index) => {
  return async (dispatch, getState) => {
    fetchSpellDetails(index)
    dispatch(spellActions.addToFavourites(index))
    addToFav(index)
  }
}

/**
 * Update redux and local storage favourite array
 * by removing spell with provided index.
 * @param index
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const removeFromFavourites = (index) => {
  return async (dispatch, getState) => {
    fetchSpellDetails(index)
    dispatch(spellActions.removeFromFavourites(index))
    removeFromFav(index)
  }
}

/**
 * Add favourite attribute to spellDetails object before
 * redux state object update
 * @param spellDetails
 * @returns {*&{favourite}}
 */
const mapSpellDetailsToIncludeFavouriteState = (spellDetails) => {
  return {
    ...spellDetails,
    favourite: isFavourite(spellDetails.index),
  }
}
