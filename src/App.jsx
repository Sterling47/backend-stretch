import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import '../src/App.css'
import Header from './Components/Header/Header'
import Cardcontainer from './Components/CardContainer/Cardcontainer'
import Detailpage from './Components/DetailPage/Detailpage'

const App = () => {
  const location = useLocation()
  const [brandFoods, setbrandFoods] = useState([]);

  const getFood = () => {
    fetch('http://localhost:3001/foodnames')
    .then(response => response.json())
    .then(data => {
      setbrandFoods(data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getFood()
  },[])

const getFilteredFood = (id) => {
  const filteredFood = brandFoods.filter(food => food.fdc_id === id)
  return filteredFood[0]
}

const searchFood = (query) => {
  const matchingFoods = brandFoods.filter(food => { 
    return food.description.toLowerCase().includes(query.toLowerCase())
})
  setbrandFoods(matchingFoods)
}
return (
    <div className='App'>
      {!location.pathname.startsWith('/detail') && <Header searchFood={searchFood}/>}
      <Routes>
        <Route path="/" element={<Cardcontainer getFood={brandFoods}/>} />
        <Route path="/detail/:id" element={<Detailpage brandFoods={brandFoods} getFilteredFood={getFilteredFood}/>} />
      </Routes>
    </div>
  )
}


export default App
