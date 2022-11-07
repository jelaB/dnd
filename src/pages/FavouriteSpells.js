import React from 'react'
import { useSelector } from 'react-redux'
import Spell from '../components/spell/Spell'

function FavouriteSpells() {
  const { spells } = useSelector((state) => state)

  return (
    <div className="favourite-list">
      {spells.favourites !== undefined && spells.favourites.length > 0 ? (
        spells.favourites.map((_spell) => (
          <Spell key={_spell} spell={spells.spellDetails[_spell]} />
        ))
      ) : (
        <p>
          NO SAVED SPELLS IN FAVOURITE LIST...<br></br> GO ON SPELLS LINK IN NAV
          BAR TO CHECK ALL SPELLS!{' '}
        </p>
      )}
    </div>
  )
}

export default FavouriteSpells
