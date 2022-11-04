import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSpellByID } from '../../services/DndService'
import Spell from './Spell'
import './card.css'

function SpellDetail () {
  const [spellDetails, setSpellDetails] = useState(null)
  const location = useLocation()

  useEffect(() => {
    getSpellByID(location.state.url).then(details => setSpellDetails(details))
  }, [location.state.url])

  return (<div>
    {(spellDetails === null) ? <p> LOADING ... </p> : <Spell index={spellDetails.index} spell={spellDetails}></Spell> }
  </div>)
}

export default SpellDetail
