import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Slide from "react-reveal";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;


    return (
      <section id="network">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">QUT</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
