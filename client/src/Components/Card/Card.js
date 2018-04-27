import React, { Component } from 'react'
import GeoLoc from '../GeoLocation/Geolocation'
import './Card.css'
import API from '../../utils/API';
import SimpleMap from '../GoogleMap/GoogleMap';
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: [],
            type: [],
            address: [],
            website: [],
            phone: [],
            raiting: [],
            lat: [],
            long: [],
            search: {
                term: "food",
                geo: {
                    lat: "29.799975199999995",
                    long: "-95.42674129999999"
                }
            }
        }
    }


    onHandleGetLocation = (lat, long) => {
        console.log(lat,long)
        API.getLocalSearch({ search: this.state.search})
        .then(response => {
    this.setState({
    picture: response.data.businesses[0].image_url,
    type: response.data.businesses[0].categories[0].title, 
    address:response.data.businesses[0].location.address1, 
    website:response.data.businesses[0].url, 
    phone: response.data.businesses[0].phone,
    rating: response.data.businesses[0].rating, 
    lat:response.data.businesses[0].coordinates.latitude, 
    long:response.data.businesses[0].coordinates.longitude
    });
        });
        
    console.log(this.state)
    }


    onMapLoaded = (userName) => {
        console.log("The map was loaded", userName);
    }
    
    render() {
        return (
            <div>
            <GeoLoc onHandleGetLocation={this.onHandleGetLocation}/>
                <div className='Main'>
                    <SimpleMap onMapLoaded={this.onMapLoaded} userName={"Ferenc"} location={{ ...this.state.search.geo }}/>
                </div>
            
            </div>

        )
    }
}



export default Card