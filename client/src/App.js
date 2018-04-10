import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import GeoLoc from './Components/GeoLocation/Geolocation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card/>
      </div>
    );
  }
}

export default App;
