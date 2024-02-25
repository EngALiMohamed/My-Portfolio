import {Container,Nav, Navbar}from 'react-bootstrap';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import headerImage from"../images/headerImage.png"
function NavBar() {

  return (
    <Router>
         <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img className='logo' src={headerImage} alt="LOGO" />
        </Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon "></span></button>          
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='active navbar-link'>Home</Nav.Link>
            <Nav.Link href="#skills" className='navbar-link'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/ali-mohamed-98335428a/' target="_blank"><img src={navIcon1} alt=""/></a>
              <a href='https://www.facebook.com/profile.php?id=100080196038970&mibextid=2JQ9oc#'target="_blank"><img src={navIcon2} alt=""/></a>
              <a href='/'><img src={navIcon3} alt=""/></a>
            </div>
            <HashLink to='#connect'>
                <button><span>Let’s Connect</span></button>
              </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </Router>

  );
}

export default NavBar;