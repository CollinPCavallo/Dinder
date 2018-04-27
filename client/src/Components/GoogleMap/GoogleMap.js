import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      center: {
        lat: props.location ? parseFloat(props.location.lat) : 0,
        lng: props.location ? parseFloat(props.location.long) : 0
      },
      zoom: 11
    }
  }

  componentDidMount = () => {
    this.props.onMapLoaded("Ferenc is awesome");
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        {this.props.onMapLoaded(this.state.center )}
          <AnyReactComponent
            lat={29.7999751}
            lng={-95.4267412}
            text={this.props.userName}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;