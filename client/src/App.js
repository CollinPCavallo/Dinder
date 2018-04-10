import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

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
