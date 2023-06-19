import Test from './components/Test';
import './App.css';
import {connect} from 'react-redux'
import {useState} from 'react'
import React from 'react';
import Counter from './components/Counter';
import { changePropOne } from './redux/actions';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      property_one: 'text one'
    }
    
  }
render(){
  return(
  <div className='App'>
    <header className='App-header'>
      <Counter/>
      {/* <h2>Simple Redux Example</h2>
      <div>
        Change Prop One: <input onChange={this.props.changeOne}/>
      </div>


      <div>{this.props.a}</div>
      <Test title='test'/> */}
    </header>
  </div>
  )
}
}
const mapStateToProps = (state)=>{
  console.log('store=>',state)
  return {
    a:state.property_one
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    changeOne:(e)=> dispatch(changePropOne(e.target.value))
  }

 }
export default connect(mapStateToProps, mapDispatchToProps)(App);
