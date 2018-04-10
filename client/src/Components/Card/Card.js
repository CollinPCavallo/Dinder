import React, { Component } from 'react'
import GeoLoc from '../GeoLocation/Geolocation'
import './Card.css'
import API from '../../utils/API';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: '',
            type: '',
            link: '',
            website: '',
            phone: '',
            raiting: '',
            lat: '',
            long: '',
            search: {
                term: "burritos",
                geo: {
                    lat: "29.799975199999995",
                    long: "-95.42674129999999"
                }
            }
        }
    }


    onHandleGetLocation = (lat, long) => {
        console.log(lat,long)
        API.getLocalSearch({ search: this.state.search}).then(response => console.log(response.data));
    }


    
    render() {
        return (
            <div>
            <GeoLoc onHandleGetLocation={this.onHandleGetLocation}/>
                <div className='Main'>

                </div>
            
            </div>

        )
    }
}



export default Card