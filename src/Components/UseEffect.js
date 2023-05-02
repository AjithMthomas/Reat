import React,{useEffect,useState} from 'react'

// function UseEffect() {
//     const[name,setName] = useState(['aji','ajiothj','kiran'])
//     const[index,setIndex] = useState(0)
//     const[indexl,setIndexl] = useState()
//     const num =[1,2,3,4,5]
//     // useEffect(()=>{
//     //     console.log('hey')
//     // },[name])
//     function handle(){
//       const len = num.length
//       if (index<len){
//         setIndex(index+1)
//       }
//       else{
//         setIndex(
//           index = 0
//         )
//       }
//     }
//   return (
    
//         <div onClick={()=>handle()}>{num[index]}</div>
        
   
//   )
// }

// 
function UseEffect(){
  const [name,setName] = useState('aji')

  useEffect(()=>{
    console.log(name)
  })
  return(
    <div>
      <h1>{name}</h1>
      <button onClick={()=>setName('athul')}>onClick</button>
    </div>
  )
}
export default UseEffect

