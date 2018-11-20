import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './components/LinkListComp';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Linked List</h1>
        
        <LinkedListComp />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
