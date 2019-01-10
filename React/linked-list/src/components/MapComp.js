import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{
    color: 'white',
    background: 'pink',
    padding: '15px 10px',
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
    // defaultProps = {
    //   center: {
    //     lat:this.props.lat,
    //     lng:this.props.lng
    //   },
    //   zoom: 11
    // };

    // this.state = {
    this.center= {
        // lat:this.props.lat,
        // lng:this.props.lng,
        zoom: 11
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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */'' }}
          center={{lat: this.props.lat, lng: this.props.lng}}
          defaultZoom={this.center.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={'lemi0000'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComp;
