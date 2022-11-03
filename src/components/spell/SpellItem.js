import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

SpellItem.propTypes = {
  spell: PropTypes.shape({
    index: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
  })
}

function SpellItem (props) {
  return (
        <React.Fragment key={props.spell.index}>
            <li>
                <Link to={'/details/' + props.spell.index} state={{ url: props.spell.url }} >
                    {props.spell.name}
                </Link>
            </li>
        </React.Fragment>
  )
}

export default SpellItem
