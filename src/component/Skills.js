import React from 'react'
import { Container , Row , Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgDeg1  from "../images/pre-deg-1.svg"
import imgDeg2  from "../images/pre-deg-2.svg"
import imgDeg3 from "../images/pre-deg-3.svg"
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>Skills</h2>
                            <p>You Can See My Skills Here </p>
                            <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                                <div className='item'>
                                    <img src={imgDeg1} alt='image'/>
                                    <h5>HTML5</h5>
                                </div>
                                <div className='item'>
                                    <img src={imgDeg2} alt='image'/>
                                    <h5>CSS3</h5>
                                </div>
                                <div className='item'>
                                    <img src={imgDeg2} alt='image'/>
                                    <h5>Bootstrap5</h5>
                                </div>
                                <div className='item'>
                                    <img src={imgDeg3} alt='image'/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className='item'>
                                    <img src={imgDeg3} alt='image'/>
                                    <h5>React js</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
