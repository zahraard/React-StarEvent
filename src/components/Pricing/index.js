import React, { Component } from "react";
import Button from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>${this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <Button
                color="white"
                background="#ffa800"
                link={this.state.linkto[i]}
              >
                PURCHASE TICKETS
              </Button>
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
