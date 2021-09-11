import logo from './logo.svg';
import './App.css';
import Heatmap from './components/heatmap/Heatmap';
import Network from './components/network/Network';
import { Menu, PageHeader} from 'antd';
import {Row, Col, Card, Input, List, Button, Empty} from 'antd';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import ReactGA from "react-ga";
import $ from "jquery";

function App () {

  

  return (
    // <div className="App">
    //   {/* <Heatmap /> */}
    //   <Network />
    // </div>
    (
      <div className="App">
        <Header data={"alo"} /> 
        <About data={"alo"} />
        <Resume data={"alo"} />
        <Portfolio data={"alo"} />
        <Contact data={"alo"} />
        <Footer data={"alo"} />
      </div>
    )
  );
}

export default App;
