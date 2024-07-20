import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import '../src/App.css'
import Header from './Components/Header/Header'
import Cardcontainer from './Components/CardContainer/Cardcontainer'
import Detailpage from './Components/DetailPage/Detailpage'

const App = () => {
  const location = useLocation()

  return (
    <div className='App'>
      {!location.pathname.startsWith('/detail') && <Header />}
      <Routes>
        <Route path="/" element={<Cardcontainer />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </div>
  )
}


export default App
