import { getSpells } from '../services/DndService'
import { loadSpellList } from '../redux/actions/SpellActions'

export const fetchSpellList = () => {
  return async (dispatch, getState) => {
    const { spells } = getState()

    if (spells.length > 0) {
      dispatch(loadSpellList(spells))
    } else {
      const spellList = await getSpells()
      dispatch(loadSpellList(addFavouriteAttribute(spellList)))
    }
  }
}

function addFavouriteAttribute(spells) {
  return spells.map((spell) => ({ ...spell, favourite: false }))
}
