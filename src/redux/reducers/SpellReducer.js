export default function spellReducer (state = { data: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_FAV':
      if (state.data === undefined) state.data = []
      state.data = [...state.data, { ...action.spell }]
      action.spell.favorite = true
      localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      return { data: state.data }
    case 'REMOVE_FROM_FAV':
      action.spell.favorite = false
      if (state.data === undefined) state.data = []
      state = [
        ...state.data.slice(0, action.spell),
        ...state.data.slice(action.spell + 1)
      ]
      localStorage.setItem('favorites', JSON.stringify({ data: state.data }))
      return { data: state.data }
    case 'CHECK':
      if (JSON.parse(localStorage.getItem('favorites')) == null) { return true } else { return false }
    default:
      return { data: [] }
  }
}
