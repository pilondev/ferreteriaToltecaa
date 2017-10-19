import React from 'react';
import { Media, Image } from 'react-bootstrap';

const BackSection = () => {
  return (
    <section className="back-section">
      <div className="row middle-xs">
        <div className="col-sm-12 text-center">
          <div className="box">
            <Media.Body align="middle">
              <Image src={process.env.PUBLIC_URL + '/img/FOTO_1.jpg'} responsive />
            </Media.Body>
          </div>
          <Media.Body align="middle">
            <Image className="back-logo" src={process.env.PUBLIC_URL + '/img/LOGO.png'} responsive />
            <button className="btn btn-secondary yellow-text black-background btn-inicio spacing-10"><a className="yellow-text" href="#main-slide">INICIO</a></button>
          </Media.Body>
        </div>
      </div>
    </section>
  );
}

export default BackSection;
