import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './components/LinkListComp';
import MathComp from './components/MathComp';
import CommunityComp from './components/CommunityComp';
import PeopleComp from './components/PeopleComp';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleComp name = 'Top 2'/>
        <CommunityComp name= 'Top 3'/>
        <MathComp name = 'Top 1'/>

        <LinkedListComp name = 'Top 2' />
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
