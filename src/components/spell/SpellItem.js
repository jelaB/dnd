import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'

SpellItem.propTypes = {
  spell: PropTypes.shape({
    index: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    favourite: PropTypes.bool
  })
}

function SpellItem (props) {
  return (
        <React.Fragment key={props.spell.index}>
            <li>
                <Link to={'/details/' + props.spell.index} state={{ url: props.spell.url }} >
                    {props.spell.name}
                </Link>
                &nbsp;
                {props.spell.favourite ? <FaHeart/> : null}
            </li>
        </React.Fragment>
  )
}

export default SpellItem
