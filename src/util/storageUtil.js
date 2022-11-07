export const storageGet = (key) => localStorage.getItem(key)
export const storageSet = (key, value) => localStorage.setItem(key, value)
export const getFavouriteSpells = () =>
  JSON.parse(storageGet('favourites') || '[]')

export const storageRemove = (key) => {
  localStorage.removeItem(key)
}

export const isFavourite = (key) => {
  const favStorage = getFavouriteSpells()
  return (
    favStorage.findIndex((spell) => {
      return spell.index === key
    }) > -1
  )
}

export const getFavouriteIndex = (key) => {
  const favStorage = getFavouriteSpells()
  return favStorage.findIndex((spell) => {
    return spell.index === key
  })
}
