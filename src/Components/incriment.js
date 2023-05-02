import React,{useState} from "react";

// class Incriment extends Component{
//     constructor(){
//         super()
//         this.state={
//             count:0        }
//     }

//     counIncrement(){
//         this.setState({
//             count:this.state.count + 5
//         })
//         // this.state.count = this.state.count + 1
//         // console.log(this.state.count)
//     }
//     render(){
//         return(
//             <div>
//                  <h1>{this.state.count}</h1>
//                  <button onClick={()=>this.counIncrement()}>Incriment</button>
//             </div>
          
//         )
//     }
// }
function Incriment(){
    const [count,setCount] =useState(0)

     function increament(){
        setCount(count +1 )
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>increament()}>increament</button>
        </div>
    )
}


export default Incriment