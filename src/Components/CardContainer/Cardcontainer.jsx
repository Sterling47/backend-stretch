import React from 'react'
import '../CardContainer/Cardcontainer.css'
import Card from '../Card/Card'
import {useEffect} from 'react'
const Cardcontainer = ({categoryFoods}) => {
  useEffect(() => {
    getCategoryFood()
  },[dropdown])
  return (
    <div className='cardContainer'>
      <h2>Foods Containing common Allergens</h2>
      <Card />
    </div>
  )
}

export default Cardcontainer