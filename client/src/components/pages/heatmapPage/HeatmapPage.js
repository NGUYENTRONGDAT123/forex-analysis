import React from "react";
import Heatmap from "../../heatmap/Heatmap";
import Slide from "react-reveal";
import "./HeatmapPage.css";

export default function HeatmapPage() {
  return (
    <section id="heatmap">
      <div className="heatmap-container">
        <div className="heatmap-row">
          <Slide left duration={1300}>
            <div className="heatmap-col heatmap-duration">
              <h1 className="heatmap-header"> Heatmap </h1>
              <p className="heatmap-para">
                The heatmap is a conventional method to illustrate the
                correlations between sectors. Constructing the heatmap of the
                correlation matrix is necessary. It would help to validate the
                results from the correlation calculations and provides a
                high-level understanding of relationships between currencies.
              </p>
              <p className="heatmap-para">
                The heatmap is colour coded using a divergent colourscale where
                strong positive correlations (correlation = 1) are red,
                uncorrelated assets are yellow (correlation = 0) and negatively
                correlated assets are dark green(correlation = -1).
              </p>
              <p className="heatmap-para">
                {`The clustered heatmap visualization already gives a good picture
                of the data and tells an interesting story:`}
              </p>
              <p className="heatmap-para indent">
                - The currency tracking Geographic regions which are close to
                each other are highly correlated with each other. For example,
                Belgium, France, EUR, Netherlands, Austria (European countries)
                currencies are highly correlated with each other, so are
                Romania, Bulgaria, and Greece (Balkan nations)
              </p>
              <p className="heatmap-para indent">
                - The strongly negative correlation is hardly seen between
                currencies.
              </p>
            </div>
          </Slide>
          <Slide left duration={1300}>
            <div className="heatmap-col">
              {/* <div className="heatmap-graph"> */}
              <Heatmap />
              {/* </div> */}
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
