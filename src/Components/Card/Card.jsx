import React from 'react'
import { Link } from 'react-router-dom'
import '../Card/Card.css'

const Card = ({fdc_id,brand_name, description}) => {
  return (
    <Link to={`/detail/${fdc_id}`} className='cardWrapper'>
    <div className='card'>
      <p>{fdc_id}</p>
      <p>{brand_name}</p>
      <p>{description}</p>
    </div>
    </Link>
  )
}

export default Card