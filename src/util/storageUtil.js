export const storageGet = (key) => sessionStorage.getItem(key)
export const storageSet = (key, value) => sessionStorage.setItem(key, value)
export const getFavouriteSpells = () =>
  JSON.parse(storageGet('favourites') || '[]')

export const isFavourite = (key) => {
  const favourites = getFavouriteSpells()
  return (
    favourites.findIndex((spell) => {
      return spell.index === key
    }) > -1
  )
}

export const getFavouriteIndex = (key) => {
  const favourites = getFavouriteSpells()
  return favourites.findIndex((spell) => {
    return spell.index === key
  })
}
