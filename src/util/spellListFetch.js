import { getSpellByID, getSpells } from '../services/DndService'
import {
  loadFavouriteSpells,
  loadSpellDetails,
  loadSpellList,
} from '../redux/actions/SpellActions'
import { getFavouriteSpells, isFavourite } from './storageUtil'

export const fetchSpellList = () => {
  return async (dispatch, getState) => {
    const { spells } = getState()

    if (spells.spellList.length > 0) {
      dispatch(loadSpellList(spells.spellList))
    } else {
      const spellList = await getSpells()
      dispatch(loadSpellList(spellList))
    }
  }
}
export const fetchSpellDetails = (spellIndex) => {
  return async (dispatch, getState) => {
    const {spells} = getState()

    if (spells.spellDetails[spellIndex]) {
      dispatch(loadSpellDetails(spells.spellDetails[spellIndex]))
    } else {
      const spell = await getSpellByID(spellIndex)
      dispatch(loadSpellDetails(mapSpellDetailsToIncludeFavouriteState(spell)))
    }
  }
}

export const fetchFavs = () => {
  return async (dispatch, getState) => {
    const {spells} = getState()

    const favStorage = getFavouriteSpells()
    if (favStorage.length > 0 && spells.favourites.length === 0) {
      const promises = favStorage.map((fav) => {
        return dispatch(fetchSpellDetails(fav))
      })
      Promise.all(promises).then(() =>
          dispatch(loadFavouriteSpells(favStorage))
      )
    } else {
      dispatch(loadFavouriteSpells([]))
    }

  }
}

const mapSpellDetailsToIncludeFavouriteState = (spellDetails) => {
  return {
    ...spellDetails,
    favourite: isFavourite(spellDetails.index),
  }
}
