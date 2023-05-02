import React  from "react";


// function ChidComponent(probs){
   
//     return(
//         <div>
//             <button onClick={()=>probs.evenHandler('hi')}>greet parent</button>
//         </div>
//     )
// }
function ChidComponent(probs){
    function data(){
     probs.ondata('this is from child')
    }
     return(
         <div>
             <button onClick={()=>data()}>greet parent</button>
         </div>
     )
 }
export default ChidComponent