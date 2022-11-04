import React, { useEffect, useState } from 'react'
import { getSpells } from '../../services/DndService'
import SpellItem from './SpellItem'
import { useSelector } from 'react-redux'

function SpellList () {
  const favourites = useSelector(state => state.favourites)
  // eslint-disable-next-line no-unused-vars
  const [favouriteSpells, setFavouriteSpells] = useState(favourites.data)
  const [spells, setSpells] = useState([])

  useEffect(() => {
    getSpells().then(_spells => setSpells(_spells))
  }, [])

  useEffect(() => {
    setFavouriteSpells(favourites.data)
  }, [favourites])

  return (
        <div>
            <h2>Spells</h2>
            <ul style={{ listStyle: 'none' }}>
                    {spells.map(_spell => {
                      if (favouriteSpells.findIndex(spell => {
                        return spell.index === _spell.index
                      }) > -1) {
                        _spell.favourite = true
                        return <SpellItem key={_spell.index} spell={_spell}/>
                      } else {
                        _spell.favourite = false
                        return <SpellItem key={_spell.index} spell={_spell}/>
                      }
                    })}
            </ul>
        </div>
  )
}

export default SpellList
