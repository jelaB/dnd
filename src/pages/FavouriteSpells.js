import React from 'react'
import { useSelector } from 'react-redux'
import Spell from '../components/spell/Spell'

function FavouriteSpells() {
  const { favourites } = useSelector((state) => state)

  return (
    <div className="favourite-list">
      {favourites.length > 0 ? (
        favourites.map((_spell) => {
          _spell = {
            ..._spell,
            favorite: true,
          }
          return <Spell key={_spell.index} spell={_spell} />
        })
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
