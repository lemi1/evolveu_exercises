import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{
    color: 'black',
    background: 'red',
    padding: '5px 5px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>


class MapComp extends Component {
  constructor(props){
    super();
    this.props=props
    
    this.center= {
        
        zoom: 5
      }
      console.log(this.props.lat);
      console.log(this.center);
    }

  //   console.log(this.state.center.lat);
  //
  //
  //   console.log("lemi",props);
  // }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */'' }}
          center={{lat: this.props.lat, lng: this.props.lng}}
          defaultZoom={this.center.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComp;
