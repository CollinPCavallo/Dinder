import React, { Component } from 'react'
import GeoLoc from '../GeoLocation/Geolocation'
import './Card.css'

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
            long: ''
        }

    }

    

    onHandleGetLocation = (lat, long) => {
        console.log(lat,long)
        this.setState({lat,long})
        fetch(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}&term=food&radius=40000`, {
            headers :{ 
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer EUczAQdNpBVQ28fAZeKs27y0JRuD2X5X5nu7de6rw4OF6hjikD53anu7P6GiDYRpQ3tJwQH_T39ZxscSJ7WDlYWfn0Dwj-J9Y3Sh8q6VP5btlvTDRpl7KgG4jy-9WnYx'
            },
            method: 'GET'
    
        })
        .then(results => {
            console.log(results)
        })
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