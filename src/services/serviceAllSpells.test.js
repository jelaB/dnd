import { getSpells } from './dndService'

const MOCK_SPELLS = {
  count: 319,
  results: [
    {
      index: 'acid-arrow',
      name: 'Acid Arrow',
      url: '/api/spells/acid-arrow',
    },
    {
      index: 'acid-splash',
      name: 'Acid Splash',
      url: '/api/spells/acid-splash',
    },
  ],
}

const MOCK_SPELLS_RESULTS = [
  {
    index: 'acid-arrow',
    name: 'Acid Arrow',
    url: '/api/spells/acid-arrow',
  },
  {
    index: 'acid-splash',
    name: 'Acid Splash',
    url: '/api/spells/acid-splash',
  },
]

const MOCK_ALL_SPELLS_API = 'https://www.dnd5eapi.co/api/spells'

let spells

describe('when all spells are retrieved', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('Then the correct average should be returned', async () => {
    fetch.mockResponseOnce(JSON.stringify(MOCK_SPELLS))
    spells = await getSpells()
    expect(spells).toEqual(MOCK_SPELLS_RESULTS)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})

describe('When the promise is rejected', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('Then the fuction throws error', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'))
    try {
      spells = await getSpells()
    } catch (e) {
      expect(e).toBe('API is down')
    }
    expect(fetch).toHaveBeenCalledWith(MOCK_ALL_SPELLS_API, { method: 'GET' })
  })
})
