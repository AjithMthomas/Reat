import React,{Component,useState} from 'react'
 
// class State extends Component{

//     constructor(){
//         super()
//         this.state={
//             message:'welcome home'
//         }
//     }
//     // handleMessage() {
//     //     this.setState({
//     //         message:"thank you for suscribing"
//     //     })
//     // }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>this.setState({message:'hee'})}>suscribe</button>
//             </div>
//         )
//     }
// }

function State(){
    const [name,setName] = useState('he y')
   
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>setName('hellow')}>click</button>
        </div>
    ) 
}

export default State