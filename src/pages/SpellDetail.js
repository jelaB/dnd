import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Spell from '../components/spell/Spell.js'
import '../components/spell/card.css'
import { fetchSpellDetails } from '../util/spellListFetch'
import { useDispatch, useSelector } from 'react-redux'

function SpellDetail() {
  const { spells } = useSelector((state) => state)

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSpellDetails(location.state.url))
  }, [location.state.url])

  return (
    <div>
      {spells.spellDetails[location.state.url] === undefined ? (
        <p> LOADING ... </p>
      ) : (
        <Spell
          index={location.state.url}
          spell={spells.spellDetails[location.state.url]}
        ></Spell>
      )}
    </div>
  )
}

export default SpellDetail
