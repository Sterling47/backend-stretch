import React, { useState } from 'react'
import '../Header/Header.css'

const Header = ({allBFCategories}) => {
const [categoryValue, setCategoryValue] = useState('')

  const BFCategorySelections = allBFCategories.map((category, index) => {
    return (
      <option key={index} value={category}>
          {category}
      </option>

    )
  })

  return (
    <header>
      <h2>Food Ingredients Search</h2>
      <form action="search">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </form>
      <h2>Food Category Search</h2>
      <div className='category-wrapper'>
        <select id='categories' name='categories' value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}>
          <label form='categories'>Search by food category:</label>
          {BFCategorySelections}
        </select>  
      </div>
    </header>
  )
}

export default Header