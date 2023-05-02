import React ,{Component, useState} from "react";
import ChidComponent from "./ChidComponent";


// class ParentComponent extends Component{
//     constructor(){
//         super()
//         this.state={
//             name:'parent'
//         } 
//         this.evenHandler = this.evenHandler.bind(this)
       
    
//     }
//     evenHandler(child){
//         alert(`helow ${this.state.name} from ${child}`)
//     }

//      render(){
//         return(
//             <div>
//                 <ChidComponent evenHandler={this.evenHandler}/>
//             </div>
//         )
//      }
// }
function ParentComponent(){
    const [data,setData] = useState("")

    function childData(dataChild){
        setData(dataChild)
    }
    return(
        <div>
            <ChidComponent ondata={childData}/>
            <h1>{data}</h1>
        </div>
    )
}

export default ParentComponent