import React,{Component} from 'react'

// function Sample (probs){

//     return (
//     <div>
//         <h1>hellow{probs.name} {probs.lastName}</h1>
//         {probs.children}
//     </div>
//     )
// }

// export default Sample

// export  const Sample = ()=>
// <h1>hellow</h1>

class Sample extends Component{
    render(){
        return <h1>hellow{this.props.name}{this.props.lastName}</h1>
    }
}

export default Sample