export default function spellReducer (state = { data: [] }, action) {
  let index = -1

  switch (action.type) {
    case 'ADD_TO_FAV':
      index = state.data.findIndex(spell => {
        return spell.index === action.spell.index
      })
      if (index === -1 || state.data.length === 0) {
        state.data = [...state.data, { ...action.spell }]
        localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      }
      return { data: state.data }
    case 'REMOVE_FROM_FAV':
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
    default:
      return { data: [] }
  }
}
