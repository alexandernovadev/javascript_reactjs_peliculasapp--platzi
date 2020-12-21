import React,{  Component} from "react";

class Stateful extends Component{

    constructor(props){
        this.props

        this.state = {
            hello: 'Hola Marte'
        }
    }

    render(){

        return(
            <h1>{this.state.hello}</h1>
        )
    }
}

export default Stateful