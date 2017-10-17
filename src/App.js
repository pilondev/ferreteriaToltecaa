import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import MainSlide from './components/main_slide';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="main-navbar">
          <NavBar />
        </section>
        <section className="main-slider">
          <MainSlide />
        </section>
        <section>

        </section>
      </div>
    );
  }
}

export default App;
