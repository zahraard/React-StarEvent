import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header-footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo/index";
import HighLights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header-footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <VenueInfo />
        <Element name="highlights">
          <HighLights />
        </Element>

        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
