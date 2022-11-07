import { handleError } from './UtilsService'

const allSpellsUrl = process.env.REACT_APP_API_SPELLS_URL

export function getSpells() {
  return fetch(allSpellsUrl, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((response) => {
      if (!response) throw new Error('Network response was not ok.')
      return response.results
    })
    .catch(handleError)
}

export function getSpellByID(spellIndex) {
  return fetch(allSpellsUrl + '/' + spellIndex, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((response) => {
      if (!response) throw new Error('Network response was not ok.')
      return response
    })
    .catch(handleError)
}
