export default function spellReducer (state = { data: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_FAV':
      if (state.data === undefined) state.data = []
      state.data = [...state.data, { ...action.spell }]
      localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      return state.data
    case 'REMOVE_FROM_FAV':
      if (state.data === undefined) state.data = []
      state = [
        ...state.data.slice(0, action.spell),
        ...state.data.slice(action.spell + 1)
      ]
      localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      return state.data
    case 'CHECK':
      if (JSON.parse(localStorage.getItem('favorites')) == null) { return true } else { return false }
    default:
      return { data: [] }
  }
}
