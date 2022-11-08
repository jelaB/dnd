import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spell from '../components/spell/Spell'
import { fetchFavs } from '../redux/util/actionCreators'

function FavouriteSpells() {
  const { spells } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFavs())
  }, [])

  return (
    <div className="favourite-list">
      {spells.favourites.length === 0 ? (
        <p>
          NO SAVED SPELLS IN FAVOURITE LIST...<br></br> GO ON SPELLS LINK IN NAV BAR TO CHECK ALL
          SPELLS!{' '}
        </p>
      ) : (
        <div className="favourite-list">
          {spells.favourites.map((_spell) => (
            <Spell key={_spell} spell={spells.spellDetails[_spell]} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavouriteSpells
