import React from 'react';
import { geolocated } from 'react-geolocated';

export class GeoLoc extends React.Component {

    render(props) {
        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                    ? 
            
                            <button onClick={() => {this.props.onHandleGetLocation(this.props.coords.latitude, this.props.coords.longitude)}}>Get Location</button>
                        
                    
                    : <div>Getting the location data&hellip; </div>;
                    
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    watchPosition: false,
    userDecisionTimeout: 30000,
})(GeoLoc);