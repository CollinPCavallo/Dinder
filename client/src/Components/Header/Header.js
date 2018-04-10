import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='Top-nav'>
                <a className='Active'>Home</a>
                <a>About Dinder</a> 
                <a>Contact Us</a>
                
                
            </div>
        )
    }
}

export default Header