import NavBar from"./component/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./component/main";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
      
      <div className="App">
        <NavBar/>
        <Main />
        <Skills />
          <Projects/>
        <Contact/>
        <Footer/>
      </div>

  );
}

export default App;
