// import { useRef } from "react";

// function useRe(){
//     const inputRef= useRef(null)
    
//     function handle(){
//         inputRef.current.focus()
//     }
//     return(
//         <div>
//             <input type="text" ref={inputRef}/> 
//             <button onClick={handle}>click</button>
//         </div>
//     )
// }

// export default useRe
import { useRef } from "react";

function useRe(){
    const inputRef= useRef(null)
    function focus(){
        inputRef.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>focus()}>focus</button>
        </div>
    )
}
export default useRe