import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/Logo.png";
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col lg={12}>
        <div className="input-mail-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>See My Projects At Once & Leave Here Your E-mail Address </h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-email-bx">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/ali-mohamed-98335428a/' target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href='https://www.facebook.com/profile.php?id=100080196038970&mibextid=2JQ9oc#'target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>--Copyright 2024-- All Rights Reserved Here By Eng Ali Mohamed</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
