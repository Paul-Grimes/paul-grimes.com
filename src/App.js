import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
