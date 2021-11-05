import React, { Component } from 'react'
import { connect } from "react-redux";
export class Counter extends Component {
    render() {
        console.log(this.props)
        return (
            <>
            <h1>Total Count{this.props.count}</h1>
            <button type="button" onClick={this.props.increment}>Add Movie</button>
            <button type="button" onClick={this.props.decrement}>Remove movie</button>
            <button type="button" onClick={this.props.reset}>Clear Movie List</button>
            </>    
        )
    }
}
let mapStateToProps=state=>state;
let mapDispatchToProps=dispatch=>{
    return {increment:()=>dispatch({type:"INCREMENT"}),
    decrement:()=>dispatch({type:"DECREMENT"}),
    reset:()=>dispatch({type:"RESET"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);