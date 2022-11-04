import React from 'react'
import { useSelector } from 'react-redux'

function HomePage () {
  // eslint-disable-next-line no-unused-vars
  const favourites = useSelector(state => state.favourites)
  return (
        <div className="jumbotron">
            <p>Front End code challenge over Dungeons & Dragons 5th Edition API.</p>
        </div>
  )
}

export default HomePage
