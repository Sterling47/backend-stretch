import React from 'react'
import { Link } from 'react-router-dom'
import '../Card/Card.css'

const Card = ({fdc_id,brand_name,description, serving_size, serving_size_unit}) => {
  return (
    <Link to={`/detail/${fdc_id}`} className='cardWrapper'>
    <div className='card'>
      <h2>{brand_name}</h2>
      <p>{description}</p>
      <p>{serving_size}</p>
      <p>{serving_size_unit}</p>
    </div>
    </Link>
  )
}

export default Card