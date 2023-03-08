import React, { Component } from "react"

class ErrorMessage extends Component{
    constructor(){
        super();
        this.state = {error:true}
        console.log()
    }
    componentDidCatch(error){
        console.log(error)
        this.setState({error:true})
    }
    render(){
       
         return this.state.error?(<h1>Error Occured</h1>):<>Class Based Compoennt</>
    }
}

export default ErrorMessage;