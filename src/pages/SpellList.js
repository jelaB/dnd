import React, { useEffect } from 'react'
import SpellItem from '../components/spell/SpellItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSpellList } from '../util/spellListFetch'

function SpellList() {
  const { favourites } = useSelector((state) => state)
  const { spells } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSpellList())
  }, [])

  return (
    <div>
      <h2>Spells</h2>
      <ul className="common-list">
        {spells.map((_spell) => {
          if (
            favourites.findIndex((spell) => {
              return spell.index === _spell.index
            }) > -1
          ) {
            _spell.favourite = true
            return <SpellItem key={_spell.index} spell={_spell} />
          } else {
            _spell.favourite = false
            return <SpellItem key={_spell.index} spell={_spell} />
          }
        })}
      </ul>
    </div>
  )
}

export default SpellList
