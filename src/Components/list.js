import React from 'react'

function List(){
    const num =[1,2,3,4,5]

     return(
        <div>
            
       {num.map((item)=>(
        <h2>{item}</h2>
       )
            
        )}
        </div>
     )
}


export default List