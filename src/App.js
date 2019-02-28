import React, { Component } from 'react';
import "./resources/styles.css";
import {Element} from 'react-scroll';

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from  "./components/venueNfo";
import Highlight from "./components/Highlights";
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
          <Header/>

          <Element name="event">
            <Featured/>
          </Element>

          <Element name="venue">
            <VenueNfo/>
          </Element>

          <Element name="highlights">
            <Highlight/>
          </Element>

          <Element name="price">
            <Pricing/>
          </Element>
          
          <Element name="location">
            <Location/>
          </Element>
          
          <Footer/>
      </div>
    );
  }
}

export default App;
