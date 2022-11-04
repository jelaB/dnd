export default function spellReducer (state = { data: [] }, action) {
  let index = -1

  switch (action.type) {
    case 'ADD_TO_FAV':
      if (state.data === undefined) state.data = []
      index = state.data.findIndex(spell => {
        return spell.index === action.spell.index
      })
      if (index === -1 || state.data.length === 0) {
        state.data = [...state.data, { ...action.spell }]
        action.spell.favorite = true
        localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      }
      return { data: state.data }
    case 'REMOVE_FROM_FAV':
      action.spell.favorite = false
      if (state.data === undefined) state.data = []
      index = state.data.findIndex(spell => {
        return spell.index === action.spell.index
      })
      if (index > -1) {
        state.data = [
          ...state.data.slice(0, index),
          ...state.data.slice(index + 1)
        ]
        localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      }
      return { data: state.data }
    case 'CHECK':
      if (JSON.parse(localStorage.getItem('favorites')) == null) { return true } else { return false }
    default:
      return { data: [] }
  }
}
