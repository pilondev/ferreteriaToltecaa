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
          <div className="row middle-xs">
            <div className="col-xs-12 col-sm-offset-1 col-sm-4 quienes-somos-img text-center">
              <div className="box">
                <img src={process.env.PUBLIC_URL + '/img/MACETON.png'} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-offset-1 col-sm-4 quienes-somos text-center">
              <div className="box">
                <h2 className="primary-header-yellow">¿Q U I E N E S S O M O S?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="yellow-section">
          <div className="row middle-xs yellow-header-company">
            <div className="col-xs-12 text-center">
              <div className="box">
                <div><h3><strong>NUESTRA EMPRESA</strong></h3></div>
              </div>
            </div>
          </div>


          <div className="row middle-xs">
            <div className="col-xs-12 col-sm-4 text-center padding-30">
              <div className="box">
                <div>
                  <img src={process.env.PUBLIC_URL + '/img/FIC1.png'} />
                  <h3 className="white-text">MISION</h3>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 text-center padding-30">
              <div className="box">
                <div>
                  <img src={process.env.PUBLIC_URL + '/img/FIC2.png'} />
                  <h3 className="white-text">VISION</h3>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 text-center padding-30">
              <div className="box">
                <div>
                  <img src={process.env.PUBLIC_URL + '/img/FIC3.png'} />
                  <h3 className="white-text">VALORES</h3>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
