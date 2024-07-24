import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import '../src/App.css'
import Header from './Components/Header/Header'
import Cardcontainer from './Components/CardContainer/Cardcontainer'
import Detailpage from './Components/DetailPage/Detailpage'

const App = () => {
  const location = useLocation()
  const [allBFCategories, setAllBFCategories] = useState([])
  const [categoryFoods, setCategoryFoods] = useState([]);

 //fetchRequest
function getCategoryFood(category) {
  fetch(`http://localhost:3001/foodcategory/${category}`)
  .then(response => {response.json()
    if(!response.ok) {
      throw new Error('Response not working')
    }
    return response.json()
  })
  .then(data => {
    setCategoryFoods(data)})
}
const getBFCategories = () => {
 return fetch("http://localhost:3001/api/food_categories")
    .then((resp) => {
      if(!resp.ok){
        throw new Error('Response not okay!')
      }
      return resp.json()
    })
    .catch((error) => console.error('There has been an issue with request: ', error));
}

const getCategory = (id) => {
  fetch(`http://localhost:3001/nutrientCategory/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log('hello:::', data))
    .catch((error) => console.error('Error fetching the category:', error));
};

//useEffect's
useEffect(() => {
  getCategory(383037);
}, [])

useEffect(() => {
  getBFCategories()
  .then(result => setAllBFCategories(result))
}, [])

return (
    <div className='App'>
      {!location.pathname.startsWith('/detail') && <Header allBFCategories={allBFCategories} getCategoryFood={getCategoryFood}/>}
      <Routes>
        <Route path="/" element={<Cardcontainer categoryFoods={categoryFoods}/>} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </div>
  )
}


export default App
