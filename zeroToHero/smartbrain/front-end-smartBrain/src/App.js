import React, { Component } from 'react';
import Navigation from './comps/Navigation/Navigation';
import 'tachyons';
import Logo from './comps/logo/Logo';
import './comps/logo/logo.css';
import Rank from './comps/Rank/Rank';
import Particles from 'react-particles-js';
import Form from './comps/form/Form';
import FaceSpotter from './comps/facespotter/Facespotter';
import SignIn from './comps/SignIn/SignIn'
import Register from './comps/Register/Register'
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
  
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false
    }
  }

  

  calcFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calcFaceLocation(response)))
      .catch(err => console.log(err))

  }
  onRouteChange = (route) => {
    if(route ==='signOut'){
      this.setState({isSignedIn:false})
    } else if(route ==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({ route: route })

  }


  render() {
   const  {isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App" >
        <Particles className='particle'
          params={particleOption} />
        <Navigation isSignedIn={isSignedIn}onRouteChange={this.onRouteChange} />

        {route === 'home'
          ? 
          <div>
            <Logo />
            <Rank />
            <Form
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            {<FaceSpotter box={box} imageUrl={imageUrl} />}
          </div>

          : 
          (
            route === 'signIn'
            ?
            <SignIn onRouteChange={this.onRouteChange} />
            :
            <Register onRouteChange={this.onRouteChange} />

          )
          
        }
      </div >
    );
  }
}

export default App;
