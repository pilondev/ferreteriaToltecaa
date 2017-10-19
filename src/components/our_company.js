import React from 'react';
import { Image, Media } from 'react-bootstrap';

const ourCompany = () => {
  return(
    <section>
      <div className="row middle-xs min-height-sections-500">
        <div className="col-xs-12 col-sm-offset-1 col-sm-4 our-company-img text-center">
          <div className="box">
            <Media.Body align="middle">
              <Image src={process.env.PUBLIC_URL + '/img/1-3.jpg'} responsive />
            </Media.Body>
          </div>
        </div>
        <div className="col-xs-12 col-sm-offset-1 col-sm-4 our-company text-center">
          <div className="box">
            <h2 className="spacing-10 yellow-text weight-bold font-23">¿QUIENES SOMOS?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
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

export default ourCompany;
