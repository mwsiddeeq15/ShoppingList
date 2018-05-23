import React, { Component } from 'react';
import MyList from './List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Jungle</h1>
        </header>
        <MyList/>
      </div>
    );
  }
}

export default App;
