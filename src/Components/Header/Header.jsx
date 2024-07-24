import React, { useState, useEffect} from 'react'
import '../Header/Header.css'

const Header = ( {brandFoods, searchFood} ) => {
  const [query, setQuery] = useState('');
  const runSearch = (e) => {
    e.preventDefault();
    searchFood(query)
  }
  return (
    <header>
      <h2>Food Ingredients Search</h2>
      <form action="">
        <div>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button onClick={(e) => runSearch(e)}>Search</button>
        </div>
      </form>
    </header>
  )
}

export default Header