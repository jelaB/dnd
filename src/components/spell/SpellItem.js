import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'
import { isFavourite } from '../../util/storageUtil'

SpellItem.propTypes = {
  spell: PropTypes.shape({
    index: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    favourite: PropTypes.bool,
  }),
}

function SpellItem(props) {
  return (
    <React.Fragment key={props.spell.index}>
      <li>
        <Link
          to={'/details/' + props.spell.index}
          state={{ url: props.spell.index }}
        >
          {props.spell.name}
        </Link>
        &nbsp;
        {isFavourite(props.spell.index) ? <FaHeart /> : null}
      </li>
    </React.Fragment>
  )
}

export default SpellItem
