import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideCar1 from '../../../images/banner/slide_car1.jpg';
import slideCar2 from '../../../images/banner/slide_car2.jpg';
import slideCar3 from '../../../images/banner/slide_car3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel className='slide-background'>
                <Carousel.Item>
                    <img
                        className="d-block w-75 pt-5 mx-auto"
                        src={slideCar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 pt-5 mx-auto"
                        src={slideCar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 pt-5 mx-auto"
                        src={slideCar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;