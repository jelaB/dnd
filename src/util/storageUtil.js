export const storageGet = (key) => localStorage.getItem(key)
export const storageSet = (key, value) => localStorage.setItem(key, value)
export const getFavouriteSpells = () =>
  JSON.parse(storageGet('favourites') || '[]')

export const storageRemove = (key) => {
  localStorage.removeItem(key)
}
export const getFavouriteIndex = (key) => {
  const favStorage = getFavouriteSpells()
  return favStorage.findIndex((spell) => {
    return spell.index === key
  })
}
export const isFavourite = (key) => {
  return getFavouriteSpells().includes(key)
}
