import React from 'react'
import '../Header/Header.css'

const Header = () => {
  return (
    <header>
      <h2>Food Ingredients Search</h2>
      <form action="search">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </form>
    </header>
  )
}

export default Header