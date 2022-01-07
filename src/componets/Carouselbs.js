import React from 'react';
import { Carousel} from "react-bootstrap"
const Carouselbs = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://randomuser.me/api/portraits/men/69.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fontColor">First slide label</h3>
                        <p className="fontColor">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://randomuser.me/api/portraits/men/69.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fontColor">First slide label</h3>
                        <p className="fontColor">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://randomuser.me/api/portraits/men/89.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fontColor">First slide label</h3>
                        <p className="fontColor">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://randomuser.me/api/portraits/men/79.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fontColor">First slide label</h3>
                        <p className="fontColor">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://randomuser.me/api/portraits/men/66.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fontColor">Second slide label</h3>
                        <p className="fontColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://randomuser.me/api/portraits/men/68.jpga"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fontColor">Third slide label</h3>
                        <p className="fontColor">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carouselbs;