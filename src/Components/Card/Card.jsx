import React from 'react'
import { Link } from 'react-router-dom'
import '../Card/Card.css'

const Card = () => {
  return (
    <Link to='/detail/1' className='cardWrapper'>
    <div className='card'></div>
    </Link>
  )
}

export default Card