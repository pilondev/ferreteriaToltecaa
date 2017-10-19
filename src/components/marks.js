import React from 'react';
import CarrouselMarks from './carrousel_marks';
import {Media, Image } from 'react-bootstrap';

const Marks = () => {
  return(
    <section className="marks min-height-sections-500 padding-30">
      <div className="row middle-xs">
        <div className="col-sm-3"></div>
        <div className="col-xs-12 col-sm-6 text-center">
          <div className="box">
            <h3 className="spacing-10 yellow-text font-23 padding-30">NUESTROS PRODUCTOS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="row middle-xs">
        <div className="col-xs-1"></div>
        <div className="col-xs-10 text-center">
          <div className="box">
            <CarrouselMarks/>
          </div>
        </div>
        <div className="col-xs-1"></div>
      </div>
      <div className="row middle-xs">
        <div className="col-sm-12 text-center">
          <div className="box">
            <Media.Body align="middle">
              <Image src={process.env.PUBLIC_URL + '/img/division.png'} responsive />
            </Media.Body>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marks;
