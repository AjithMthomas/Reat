import React ,{Component}from "react";

// function EventHandler(){
//   function clickHandler(){
//     console.log("button is clicked")
//  }
//     return (
//         <div>
//             <button onClick={clickHandler}>onClick</button>
//         </div>
//     )
// }
class EventHandler extends Component{
//     clicHandler(){
//         console.log('clicked')
//     }
// render(){
//     return(
//         <div>
//             <button onClick={this.clicHandler}>click</button>
//         </div>
//     )
// }

// }
constructor(){
    super()
    this.state={
        message:"helle"
    }
    this.clicked= this.clicked.bind(this)
}
clicked(){
    this.setState({
        message:"hai"
    })
}
render(){
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.clicked.bind(this)}>click</button> */}
              {/* <button onClick={()=>this.clicked}>click</button>  */}
              <button onClick={this.clicked}>click</button> 
        </div>
    )
}
}
export default EventHandler

