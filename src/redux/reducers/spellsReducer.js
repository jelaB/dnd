export default function spellsReducer(state, action) {
  switch (action.type) {
    case 'LOAD_SPELL_LIST':
      return action.spellList
    default:
      return state !== undefined ? state : []
  }
}
