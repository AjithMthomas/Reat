import React , { useState }from 'react'


function Counter() {
    const [count,setCount] =useState(0)

    function increament(){
        setCount(count+1)
    }
  return (

    <div>
        <h1>{count}</h1>
        <button onClick={()=>increament()}>increament</button>
    </div>
  )
}

export default Counter