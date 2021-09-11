import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = "WebScape Team";
    const profilepic = "images/profilepic.jpg";
    const bio = "We are students from QUT try to crack the UQ Hackathon 2021";
    const street = "2 George Street";
    const city = "Brisbane City";
    const state = "Queensland";
    const zip = "4000";
    const phone = "0434 674 701";
    const email = "webscapteteam@qut.edu.au";
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>             
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
