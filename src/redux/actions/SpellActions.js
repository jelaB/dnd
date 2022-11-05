export const addToFavourites = (spell) => ({ type: 'ADD_TO_FAV', spell })
export const removeFromFavourites = (spell) => ({
  type: 'REMOVE_FROM_FAV',
  spell,
})
export const loadSpellList = (spellList) => ({
  type: 'LOAD_SPELL_LIST',
  spellList,
})
