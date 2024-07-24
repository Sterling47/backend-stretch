import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import '../DetailPage/Detailpage.css'


const Detailpage = ({ brandFoods, getFilteredFood }) => {
  const { id } = useParams();
  const singleFood = getFilteredFood(id);
  if (!singleFood) {
    return (
      <div>
        <h2>Detailpage</h2>
        <Link to='/' className='homeBttn'>Home</Link>
        <p>Food item not found</p>
      </div>
    );
  }
  const {fdc_id, brand_name, ingredients, serving_size, serving_size_unit} = singleFood


  return (
    <div>
      <h2>Detailpage</h2>
      <Link to='/' className='homeBttn'>Home</Link>
      <div>
        <p className='fdc-id'>fdc_id: {fdc_id}</p>
        {brand_name ? <p>brand_name: {brand_name} </p> : <p>No matching brand name</p> }
        <p>Ingredients: {ingredients}</p>
        <p>Serving Size: {serving_size} {serving_size_unit}</p>
      </div>
    </div>
  );
};

export default Detailpage;