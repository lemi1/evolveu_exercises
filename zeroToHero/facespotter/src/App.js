import React, { Component } from 'react';
import Navigation from './comps/Navigation';
import 'tachyons';
import Logo from './comps/logo/Logo';
import './comps/logo/logo.css';
import Rank from './comps/Rank';
import Particles from 'react-particles-js';
// import ParticleEffectButton from 'react-particle-effect-button'
import Form from './comps/Form';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
  apiKey: '6e7a3d095daf4101be97442f8cf9cd93'
});

const particleOption = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
        value_area: 800,

      }
    }
  },
  // "interactivity": {
  //   "detect_on": "canvas",
  //   "events": {
  //     "onhover": {
  //       "enable": false,
  //       "mode": "repulse"
  //     },
  //     "onclick": {
  //       "enable": false,
  //       "mode": "push"
  //     },
  //   }
  // }
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

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        console.log(response)
      },
      function (err) {
        // there was an error
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Particles className='particle'
          params={particleOption} />


        <Navigation />
        <Logo />
        <Rank />
        <Form
          onInputChange={this.onInputChange}
          onSubmit={this.onButtonSubmit}
        />
        {/* { <FaceSpotter />} */}
      </div>
    );
  }
}

export default App;
