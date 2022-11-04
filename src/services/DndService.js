import { handleError } from './UtilsService.js'

const allSpellsUrl = process.env.REACT_APP_API_SPELLS_URL
const baseUrl = process.env.REACT_APP_API_BASE_URL

export function getSpells () {
  return fetch(allSpellsUrl, {
    method: 'GET'
  }).then(res => res.json())
    .then(response => {
      if (!response) throw new Error('Network response was not ok.')
      return response.results
    })
    .catch(handleError)
}

export function getSpellByID (spellIndex) {
  return fetch(baseUrl + spellIndex, {
    method: 'GET'
  }).then(res => res.json())
    .then(response => {
      if (!response) throw new Error('Network response was not ok.')
      return response
    })
    .catch(handleError)
}
