import React from 'react'
import css from "./Header.module.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={css.container}>

     <span className={css.spans}> <Link to="/random">Home</Link></span>
     <span  className={css.spans}><Link to="/bookmark">  Bookmarks</Link></span>
      
    
    </div>
  )
}

export default Header