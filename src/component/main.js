import { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons' 
import FirstImage from "../images/mainImage.png"
import"animate.css"

export default function Main() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "MERN Stack Developer", "Software Engineer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  return (
    <section className="main" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className= "animate__animated animate__zoomInDown" >Welcome! I'm Ali<br/>Mohamed <br/><span className="txt-rotate animate__animated animate__rubberBand" dataPeriod="1200" ><span className="wrap">{text}</span></span></h1>
                  <p>Hello Everyone , I`m a junior Front-End React Developer </p>
                    <button>Let’s Connect <ArrowRightCircle size={35} /></button>  
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={FirstImage} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
