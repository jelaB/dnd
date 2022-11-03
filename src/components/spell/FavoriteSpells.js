
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Spell from './Spell'

function FavoriteSpells () {
  const favourites = useSelector(state => state.favourites)
  // eslint-disable-next-line no-unused-vars
  const [spells, setSpells] = useState(favourites.data)

  return (
        <div>
            {spells.map((_spell) => {
              return <Spell key={_spell.index} spell={_spell}/>
            })}
        </div>
  )
}

export default FavoriteSpells
