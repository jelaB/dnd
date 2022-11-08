export const storageGet = (key) => localStorage.getItem(key)
export const storageSet = (key, value) => localStorage.setItem(key, value)
export const getFavouriteSpells = () =>
  JSON.parse(storageGet('favourites') || '[]')

export const getFavouriteIndex = (key) => {
  const favStorage = getFavouriteSpells()
  return favStorage.findIndex((spell) => {
    return spell === key
  })
}
export const isFavourite = (key) => {
  return getFavouriteSpells().includes(key)
}

export const addToFav = (index) => {
  const favs = getFavouriteSpells()
  storageSet('favourites', JSON.stringify([...favs, index]))
}

export const removeFromFav = (index) => {
  const existingIndex = getFavouriteIndex(index)
  if (existingIndex > -1) {
    const favs = getFavouriteSpells()
    storageSet(
      'favourites',
      JSON.stringify([...favs.slice(0, index), ...favs.slice(index + 1)])
    )
  }
}
