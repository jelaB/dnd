import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as spellActions from '../../redux/actions/SpellActions'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

Spell.propTypes = {
  spell: PropTypes.shape({
    index: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    higher_level: PropTypes.array,
    material: PropTypes.string,
    components: PropTypes.array,
    desc: PropTypes.array,
    range: PropTypes.string,
    duration: PropTypes.string,
    favorite: PropTypes.bool
  })
}

function Spell (props) {
  const favourites = useSelector(state => state.favourites)
  const [selectedSpell, setSelectedSpell] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (checkInFavorites()) {
      setSelectedSpell({ ...selectedSpell, favorite: true, index: props.spell.index })
    } else {
      setSelectedSpell({ ...selectedSpell, favorite: false, index: props.spell.index })
    }
  }, [])

  function checkInFavorites (index) {
    const indexOfObject = favourites.data.findIndex(spell => {
      return spell.index === index
    })
    return indexOfObject === -1 ? null : favourites.data[indexOfObject]
  }

  // eslint-disable-next-line no-unused-vars
  function addToFav () {
    if (!selectedSpell.favorite) {
      setSelectedSpell({ ...selectedSpell, favorite: true, index: props.spell.index })
      dispatch(spellActions.addToFavourites(selectedSpell))
    } else {
      setSelectedSpell({ ...selectedSpell, favorite: false, index: props.spell.index })
      dispatch(spellActions.removeFromFavourites(selectedSpell))
    }
  }

  return (<div className='card-container'>
        <div className='card-background'>
            <div className='card-frame'>
                <div className='frame-header'>
                    <h1 className='name'>{props.spell.name}</h1>
                </div>
                <div className="frame-text-box">
                    <p className="description ftb-inner-margin">{props.spell.desc[0]} </p>
                    <p className="description">{props.spell.higher_level[0]}</p>
                    <p className="flavour-text">{props.spell.material}</p>
                </div>

                <div className="frame-bottom-info inner-margin">
                    <div className="fbi-left">
                        <p>Range: {props.spell.range}</p>
                        <p>Duration: {props.spell.duration}</p>
                    </div>
                    <div className="favoriteIcon" onClick={addToFav}>
                        {selectedSpell.favorite ? <FaHeart/> : <FaRegHeart/>}
                    </div>

                    <div className="fbi-right">
                        Components: {props.spell.components}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Spell
