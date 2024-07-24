import React from 'react'
import '../CardContainer/Cardcontainer.css'
import Card from '../Card/Card'
import {useEffect} from 'react'
const Cardcontainer = ({categoryFoods}) => {
  // useEffect(() => { 
  //   getCategoryFood()
  // },[dropdown])
  const matchingFoods = categoryFoods.map(({id,fdc_id,brand_name,description,serving_size,serving_size_unit}) => {
    return <Card
    key={id} 
    fdc_id={fdc_id}
    brand_name={brand_name}
    description={description}
    serving_size={serving_size}
    serving_size_unit={serving_size_unit}
    />
  })
  return (
    <div className='cardContainer'>
      {/* {!matchingFoods.brand_name ? <h2>No Foods to display </h2>:  <h2>Foods Containing{matchingFoods[0][branded_food_category]} } */}
      {matchingFoods}
    </div>
  )
}

export default Cardcontainer

//fdc_id,brand_name,description, serving_size, serving_size_unit