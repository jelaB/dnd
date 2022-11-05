import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import * as spellActions from '../../redux/actions/SpellActions'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { isFavourite } from '../../util/storageUtil'

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
    favorite: PropTypes.bool,
  }),
}

function Spell(props) {
  const [selectedSpell, setSelectedSpell] = useState(props.spell)

  const dispatch = useDispatch()

  function addToFav() {
    if (!isFavourite(selectedSpell.url)) {
      setSelectedSpell({
        ...selectedSpell,
        favorite: true,
      })
      dispatch(spellActions.addToFavourites(selectedSpell))
    } else {
      setSelectedSpell({
        ...selectedSpell,
        favorite: false,
      })
      dispatch(spellActions.removeFromFavourites(selectedSpell))
    }
  }

  return (
    <div className="card-container">
      <div className="card-background">
        {selectedSpell === '' ? (
          <p> LOADING ... </p>
        ) : (
          <div className="card-frame">
            <div className="frame-header">
              <h1 className="name">{selectedSpell.name}</h1>
            </div>
            <div className="frame-text-box">
              <p className="description ftb-inner-margin">
                {selectedSpell.desc[0]}{' '}
              </p>
              <p className="description">{selectedSpell.higher_level[0]}</p>
              <p className="flavour-text">{selectedSpell.material}</p>
            </div>

            <div className="frame-bottom-info inner-margin">
              <div className="fbi-left">
                <p>Range: {selectedSpell.range}</p>
                <p>Duration: {selectedSpell.duration}</p>
              </div>
              <div className="favoriteIcon" onClick={addToFav}>
                {selectedSpell.favorite ? <FaHeart /> : <FaRegHeart />}
              </div>

              <div className="fbi-right">
                Components: {selectedSpell.components}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Spell
