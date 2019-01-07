import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Button from "../UI/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  componentDidUpdate() {
    setTimeout(() => this.porcentage(), 30);
  }
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Where does it come from?</h3>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <Button color="white" background="#ffa800" link="#">
                PURCHASE TICKETS
              </Button>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
