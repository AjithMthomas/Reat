import React,{useState,useMemo}from 'react'

function UseMem() {
     const [counerOne,setcounerOne] =useState(0)
     const [counerTwo,setcounerTwo] =useState(0)
    
     function incrementOne(){
        setcounerOne(counerOne+1)
     }
     function incremenTwo(){
        setcounerTwo(counerTwo+1)
     }

     const isEven=useMemo(()=>{
        let i=0;
        while(i<2000) i++
        return counerOne % 2 === 0
     },[counerOne])

  return (
    <div>
        <button onClick={()=>incrementOne()}>one :{counerOne}</button>
        <button onClick={()=>incremenTwo()}>two :{counerTwo}</button>
        <span>{isEven?'even':'odd'}</span>
    </div>
  )
}

export default UseMem