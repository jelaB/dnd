import SpellList from '../SpellList'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../../util/testingUtils'
import '@testing-library/jest-dom'

export const MOCK_SPELLS = {
  count: 2,
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

describe('SpellList', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('renders loading state', async () => {
    fetch.mockResponseOnce(JSON.stringify(MOCK_SPELLS))
    const { debug } = renderWithRedux(<SpellList />)

    const targetItem = await screen.findByTestId('acid-arrow')

    expect(targetItem).toBeInTheDocument()

    debug()
  })
})
