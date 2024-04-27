import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './custom.css';

function ImageSlider() {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/253308/pexels-photo-253308.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            style={{ maxWidth: '100%', maxHeight: '400px' }} // Adjust the max width and max height as needed
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/20178475/pexels-photo-20178475/free-photo-of-two-people-walking-through-the-snow-on-a-trail.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Second slide"
            style={{ maxWidth: '100%', maxHeight: '400px' }} // Adjust the max width and max height as needed
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7409/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
            style={{ maxWidth: '100%', maxHeight: '400px' }} // Adjust the max width and max height as needed
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
