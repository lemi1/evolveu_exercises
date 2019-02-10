import React, { Component } from 'react';
import Navigation from './comps/Navigation';
import 'tachyons';
import Logo from './comps/logo/Logo';
import './comps/logo/logo.css';
import Rank from './comps/Rank';
import Particles from 'react-particles-js';
import ParticleEffectButton from 'react-particle-effect-button'
import ImageLinkForm from './comps/Form';
import './App.css';


const particleOption = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800,

      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
    }
  }
}
const particleButton = {
  < ParticleEffectButton
color = '#121019'
hidden = { this.state.hidden }
  >
  BUTTON CONTENT GOES HERE
      </ParticleEffectButton >
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
        <Particles className='particle'
          params={particleOption} />


        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm className='particleButton'

          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {/* { <FaceSpotter />} */}
      </div>
    );
  }
}

export default App;
