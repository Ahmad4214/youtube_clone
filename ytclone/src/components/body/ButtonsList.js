 import React from 'react'
import TopButton from './TopButton'

 const list = ["All", "Gaming", "News", "Cricket", "Cooking", "Movies","Tech", "Programing","Health","Updates"]

 const ButtonsList = () => {
   return (
     <div >
        <TopButton list={list}/> 
     </div>
   )
 }

 export default ButtonsList