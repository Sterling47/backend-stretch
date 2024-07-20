import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Card/Card.css'

const Card = () => {
  return (
    <NavLink to='/detail/1' className='cardWrapper'>
    <div className='card'></div>
    </NavLink>
  )
}

export default Card