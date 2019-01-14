import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LinkedListComp from './components/LinkListComp';
import MathComp from './components/MathComp';
import CommunityComp from './components/CommunityComp';
import PeopleComp from './components/PeopleComp';
import thumbs from './calc.svg';
import thumbs1 from './people.svg';
import thumbs2 from './globe.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      compToShow: 'logo',
    }
  }
  onIcon = (e) => {
    console.log(e.currentTarget.name);
    this.setState({
      compToShow: e.currentTarget.name,
    })
  }
  render() {
    let toShow;
    if (this.state.compToShow === 'math') {
      toShow =
        <div>
          <MathComp name="math"/>
        </div>
      } else if(this.state.compToShow === "people") {
          toShow =
            <div>
              <PeopleComp name="people"/>
            </div>
        }else if(this.state.compToShow === "city") {
          toShow =
            <div>
              <CommunityComp name='city'/>
            </div>
        };
    return (
      <div className="App">
        <img src={thumbs} className="logos" name="math" onClick={this.onIcon} alt="calculator" />
        <img src={thumbs1} className="logos" name="people" onClick={this.onIcon} alt="people" />
        <img src={thumbs2} className="logos" name="city" onClick={this.onIcon} alt="globe" />
        <div> {toShow} </div>


        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
      </div>
    );
  }
}

export default App;
