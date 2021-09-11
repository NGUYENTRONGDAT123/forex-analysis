import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    const social = [
      {
        "name":"facebook",
        "className":"fa fa-facebook"
      },
      {
        "name":"twitter",
        "className":"fa fa-twitter"
      },
      {
        "name":"linkedin",
        "className":"fa fa-linkedin"
      },
      {
        "name":"instagram",
        "className":"fa fa-instagram"
      },
      {
        "name":"github",
        "className":"fa fa-github"
      }
    ]
    const networks = social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={"https://www.facebook.com/hoangqwe159"}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 WebScape</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
