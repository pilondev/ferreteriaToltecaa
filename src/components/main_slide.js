import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class MainSlide extends Component {
  render(){
    return(
      <Carousel>
        <Carousel.Item>
          <img width={1920} height={1080} alt="900x500" src={process.env.PUBLIC_URL + '/img/slide_1.jpg'}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={1080} alt="900x500" src={process.env.PUBLIC_URL + '/img/slide_2.jpg'}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={1080} alt="900x500" src={process.env.PUBLIC_URL + '/img/slide_3.jpg'}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={1080} alt="900x500" src={process.env.PUBLIC_URL + '/img/slide_4.jpg'}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
    );
  }
}
