
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spell from './Spell'

function FavoriteSpells () {
  const favourites = useSelector(state => state.favourites)
  const [spells, setSpells] = useState(favourites.data)

  useEffect(() => {
    setSpells(favourites.data)
  }, [favourites])

  return (
        <div className="favourite-list">
            { spells.length > 0
              ? spells.map((_spell) => {
                return <Spell key={_spell.index} spell={_spell.spell}/>
              })
              : <p>NO SAVED SPELLS IN FAVOURITE LIST...<br></br> GO ON SPELLS LINK IN NAV BAR TO CHECK ALL SPELLS! </p>}
        </div>
  )
}

export default FavoriteSpells
