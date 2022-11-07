import React, { useEffect } from 'react'
import SpellItem from '../components/spell/SpellItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSpellList } from '../util/spellListFetch'

function SpellList() {
  const { spells } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSpellList())
  }, [])

  return (
    <div>
      <h2>Spells</h2>
      <ul className="common-list">
        {spells.spellList !== undefined &&
          spells.spellList.map((_spell) => (
            <SpellItem key={_spell.index} spell={_spell} />
          ))}
      </ul>
    </div>
  )
}

export default SpellList
