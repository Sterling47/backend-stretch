import React from 'react'
import { useState, useEffect } from 'react'
import './Header.css'
export const Header = () => {
  const [err, setError] = useState('')
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  
  useEffect(() => {
    if (query.length >= 3) {
      setTimeout(() => {
        getQueryResults(query)
        .then(data => {
          let brandedResults = data.branded.map(({food_name, brand_name, photo, calories, serving_qty, serving_unit}) => { //{common: Array of obj, branded: Array of obj} branded array: {food_name,photo:{thumb:}, calories, serving_qty, serving_unit}
            return (
              <div className='query-result'>
                <div className='branded-result-card'>
                  <img src={photo.thumb} alt={`picture of ${food_name}`} className='food_image'/>
                  <h3 className='result'>{food_name}</h3>
                  <p className='calories_number'>{calories}</p>
                  <p className='brand_name'>{brand_name}</p>
                  <p className='serving_qty'>{serving_qty}</p>
                  <p className='serving_unit'>{serving_unit}</p>
                  <p className='calories_text'>Calories</p>
                </div>
              </div>
            )
          })
            setResults(<div className='result-container'>{brandedResults}</div>)
        })
        .catch(err => setError(err.code + err));
      },3000)
    }
  },[query])
 
  return (
    <>
      <div>Header</div>
      {err && <p className='err-message'>{err}</p>}
      <input placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)}></input>
      {results}
    </>
  )
}

const getQueryResults = (query) => {
  return fetch(`https://trackapi.nutritionix.com/v2/search/instant/?query=${query}`,{
    method: 'GET',
    headers: {
      "Content-Type":"application/json",
      'x-app-id': import.meta.env.VITE_API_ID,
      'x-app-key': import.meta.env.VITE_API_KEY
    }
  })
  .then(res => {
    if (!res.ok) {
      console.log(import.meta.env)
      throw new Error('could not fetch item data')
    }
    return res.json()
  })
}
