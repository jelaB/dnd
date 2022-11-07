import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spell from '../components/spell/Spell'
import { fetchFavs } from '../util/spellListFetch'

function FavouriteSpells() {
  const { spells } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFavs())
  }, [])

  return (
    <div className="favourite-list">
      {spells.favourites !== undefined &&
      spells.spellDetails !== undefined &&
      spells.favourites.length > 0 ? (
        spells.favourites.map((_spell) =>
          spells.spellDetails[_spell] !== undefined ? (
            <Spell key={_spell} spell={spells.spellDetails[_spell]} />
          ) : null
        )
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
