import React from 'react'
import css from "./Home.module.css"
import {BsFillBookmarkPlusFill} from "react-icons/bs"

const Home = () => {
  return (
    <div className={css.container}>
        <div className={css.content}>
             <span>the main thing about every one is that we can know our strength in ourself</span>
            <span>-Albert Einstein</span>  
            <div className={css.bicon}> <BsFillBookmarkPlusFill/></div>   
        </div>
        <button className={css.btn}>Next Quote</button>

    </div>
  )
}

export default Home