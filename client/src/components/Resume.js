import React, {Component} from 'react';
import Slide from 'react-reveal';
import Heatmap from './heatmap/Heatmap';

class Resume extends Component {
  getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor (Math.random () * 16)];
    }
    return color;
  }

  render () {
    if (!this.props.data) return null;

    return (
      <section id="heatmap">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Heatmap </span>
              </h1>
              <p>asffffffffff</p>
            </div>

            <div className="nine columns main-col">
              <Heatmap></Heatmap>
            </div>

          </div>

        </Slide>
      </section>
    );
  }
}

export default Resume;
