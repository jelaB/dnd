import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as spellActions from '../../redux/actions/SpellActions'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { isFavourite } from '../../util/storageUtil'

Spell.propTypes = {
  index: PropTypes.string,
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
    favourite: PropTypes.bool,
  }),
}

function Spell(props) {
  const { spells } = useSelector((state) => state)

  const dispatch = useDispatch()

  function addToFav() {
    if (!isFavourite(props.index)) {
      dispatch(spellActions.addToFavourites(props.spell))
    } else {
      dispatch(spellActions.removeFromFavourites(props.spell))
    }
  }

  return (
    <div className="card-container">
      <div className="card-background">
        {spells.spellDetails[props.spell.index] === undefined ? (
          <p> LOADING ... </p>
        ) : (
          <div className="card-frame">
            <div className="frame-header">
              <h1 className="name">
                {spells.spellDetails[props.spell.index].name}
              </h1>
            </div>
            <div className="frame-text-box">
              <p className="description ftb-inner-margin">
                {spells.spellDetails[props.spell.index].desc[0]}{' '}
              </p>
              <p className="description">
                {spells.spellDetails[props.spell.index].higher_level[0]}
              </p>
              <p className="flavour-text">
                {spells.spellDetails[props.spell.index].material}
              </p>
            </div>

            <div className="frame-bottom-info inner-margin">
              <div className="fbi-left">
                <p>Range: {spells.spellDetails[props.spell.index].range}</p>
                <p>
                  Duration: {spells.spellDetails[props.spell.index].duration}
                </p>
              </div>
              <div className="favoriteIcon" onClick={addToFav}>
                {spells.spellDetails[props.spell.index].favourite ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </div>

              <div className="fbi-right">
                Components: {spells.spellDetails[props.spell.index].components}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Spell
