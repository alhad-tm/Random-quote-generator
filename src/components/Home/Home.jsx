import React from 'react'
import css from "./Home.module.css"
import {BsFillBookmarkPlusFill} from "react-icons/bs"
import { useSelector,useDispatch } from 'react-redux'
import { fetchQuotes } from '../../redux/slice/quotes'



const Home = () => {
 
  const dispatch=useDispatch()
  const state=useSelector((state)=>state)
  console.log("home state",state);

  if(state.quote.isLoading){
    return(
      
      
        <div className={css.circle}>
         </div>
    )
  }

  return (
   
    <div className={css.container}>

        <div className={css.content}>
             <span>{state.quote.data && state.quote.data.content}</span>
             
            <span>-{state.quote.data && state.quote.data.author}</span>  
            <div className={css.bicon}> <BsFillBookmarkPlusFill/></div>   
        </div>
        <button onClick={()=>dispatch(fetchQuotes())} className={css.btn}>Next Quote</button>

    </div>
  )
}

export default Home