import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSpellByID } from '../services/DndService.js'
import Spell from '../components/spell/Spell.js'
import '../components/spell/card.css'
import { isFavourite } from '../util/storageUtil'

function SpellDetail() {
  const [spellDetails, setSpellDetails] = useState(null)
  const location = useLocation()

  useEffect(() => {
    getSpellByID(location.state.url).then((details) =>
      setSpellDetails({
        ...details,
        favorite: isFavourite(details.url),
      })
    )
  }, [location.state.url])

  return (
    <div>
      {spellDetails === null ? (
        <p> LOADING ... </p>
      ) : (
        <Spell index={spellDetails.index} spell={spellDetails}></Spell>
      )}
    </div>
  )
}

export default SpellDetail
