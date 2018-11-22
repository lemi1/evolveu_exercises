import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lm from './components/linkList';
import LinkedListComp from './components/LinkedListComp.js';

class App extends Component {
  // constructor(first){
  //   super(first);
  //   this.head = 
  // }

  addNode(event){
    let input = document.getElementById('input');
    console.log(input.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" id="input"/>
          <button onClick={this.addNode}> add new </button>
          
        </header>
        <h1> This is my new beginning</h1>
        <LinkedListComp />
      </div>
    );
  



  }
}

export default App;
