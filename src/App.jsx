import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import '../src/App.css'
import Header from './Components/Header/Header'
import Cardcontainer from './Components/CardContainer/Cardcontainer'
import Detailpage from './Components/DetailPage/Detailpage'

const App = () => {
  const location = useLocation()

const [allBFCategories, setAllBFCategories] = useState([])

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

useEffect(() => {
  getBFCategories()
  .then(result => setAllBFCategories(result))
}, [])

  return (
    <div className='App'>
      {!location.pathname.startsWith('/detail') && <Header allBFCategories={allBFCategories}/>}
      <Routes>
        <Route path="/" element={<Cardcontainer />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </div>
  )
}


export default App
