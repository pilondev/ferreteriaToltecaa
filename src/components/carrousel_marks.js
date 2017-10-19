import React from 'react';
import { Carousel, Image, Media } from 'react-bootstrap';

const carrouselMarks = () =>{
  return(
    <section className="carrousel-marks padding-30">
      <Carousel>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={150} height={150} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/AUSTROMEX.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={120} height={120} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/BEREL.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/DEACERO.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/EXITO.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/FANAL.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={250} height={250} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/lenox.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/resistol.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={150} height={150} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/RUGO.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/SAYER.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/truper.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Media.Body align="middle">
            <Image width={200} height={200} alt="900x500" src={process.env.PUBLIC_URL + '/img/marks/urrea.png'} responsive/>
          </Media.Body>
        </Carousel.Item>
     </Carousel>
    </section>
  );
}
export default carrouselMarks;
