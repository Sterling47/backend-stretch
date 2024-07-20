import React from 'react'
import '../CardContainer/Cardcontainer.css'
import Card from '../Card/Card'

const Cardcontainer = () => {
  return (
    <div className='cardContainer'>
      <h2>Foods Containing common Allergens</h2>
      <Card />
    </div>
  )
}

export default Cardcontainer