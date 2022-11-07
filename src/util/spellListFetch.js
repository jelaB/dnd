import { getSpellByID, getSpells } from '../services/DndService'
import { loadSpellDetails, loadSpellList } from '../redux/actions/SpellActions'
import { isFavourite } from './storageUtil'

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
    const { spells } = getState()

    if (spells.spellDetails[spellIndex]) {
      dispatch(loadSpellDetails(spells.spellDetails[spellIndex]))
    } else {
      const spell = await getSpellByID(spellIndex)
      dispatch(loadSpellDetails(mapSpellDetailsToIncludeFavouriteState(spell)))
    }
  }
}

const mapSpellDetailsToIncludeFavouriteState = (spellDetails) => {
  return {
    ...spellDetails,
    favourite: isFavourite(spellDetails.index),
  }
}
