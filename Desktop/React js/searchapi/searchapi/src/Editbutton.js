import React, { useEffect, useState } from 'react'

const Editbutton = ({updateState}) => {
    const[edit,setEdit]=useState([])
console.log(edit,'utrew');

    const editchange=(event)=>{
        setEdit(event.target.value)
        
        getEdit()
    }


    const getEdit=async()=>{
        let response=await fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
        let convertJSON=await response.json()
        updateState(convertJSON.meals)
        
    }


    useEffect(()=>{
        return()=>{

        }
    },[])
  return (
    <div>
       <button onClick={editchange}>Chicken</button>
    </div>
  )
}

export default Editbutton