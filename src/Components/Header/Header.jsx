import React, { useState, useEffect} from 'react'
import '../Header/Header.css'

const Header = ( {brandFoods} ) => {

  return (
    <header>
      <h2>Food Ingredients Search</h2>
      <form action="">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </form>
    </header>
  )
}

export default Header