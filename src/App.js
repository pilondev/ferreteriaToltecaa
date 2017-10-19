import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainSlide from './components/main_slide';
import WhoSection from './components/who_are_us';
import OurCompany from './components/our_company';
import Marks from './components/marks';
import BackSection from './components/back_section';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <MainSlide />
        <OurCompany />
        <WhoSection />
        <Marks />
        <BackSection />
        <Footer />
      </div>
    );
  }
}

export default App;
