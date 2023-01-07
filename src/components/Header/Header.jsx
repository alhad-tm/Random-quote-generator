import React from 'react'
import css from "./Header.module.css"

const Header = () => {
  return (
    <div className={css.container}>
      <span>Home</span>
      <span>Bookmarks</span>
    </div>
  )
}

export default Header