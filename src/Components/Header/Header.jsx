import React from 'react'
import '../Header/Header.css'

const Header = () => {
  return (
    <header>
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