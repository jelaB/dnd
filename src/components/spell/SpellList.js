import React, { useEffect, useState } from 'react'
import { getSpells } from '../../services/DndService'
import SpellItem from './SpellItem'

function SpellList () {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    getSpells().then(_spells => setSpells(_spells))
  }, [])

  return (
        <div>
            <h2>Spells</h2>
            <ul style={{ listStyle: 'none' }}>
                    {spells.map(_spell =>
                        <SpellItem key={_spell.index} spell={_spell}/>
                    )}
            </ul>
        </div>
  )
}

export default SpellList
