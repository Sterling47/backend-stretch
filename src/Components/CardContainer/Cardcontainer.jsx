import React from 'react'
import '../CardContainer/Cardcontainer.css'
import Card from '../Card/Card'
import {useEffect} from 'react'
const Cardcontainer = ({ getFood }) => {

  const matchingFoods = getFood.map(({fdc_id,brand_name, description}) => {
    return <Card
    key={fdc_id} 
    fdc_id={fdc_id}
    brand_name={brand_name}
    description={description}
    />
  })
  return (
    <div className='cardContainer'>
      {matchingFoods.length > 0 ? matchingFoods : <h3>Nothing to display</h3>  }
    </div>
  )
}

export default Cardcontainer

//fdc_id,brand_name,description, serving_size, serving_size_unit