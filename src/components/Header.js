import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const style = { color: '#F15B2A' }

  return (
    <nav>
      <NavLink to="/" activestyle={style}>
        Spells
      </NavLink>{' '}
      {' | '}
      <NavLink to="/favs" activestyle={style}>
        Favourites
      </NavLink>
    </nav>
  )
}

export default Header
