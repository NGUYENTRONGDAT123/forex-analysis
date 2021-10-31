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
              The clustered heatmap visualization already gives a good picture
                of the data and tells an interesting story. Overall, the strongly negative correlations are hardly seen between currencies. The currencies that are close to each other according to geographic regions tend to be grouped in the same cluster. For example, it is shown in the visualization that the list of currencies run from CHF (Switzerland) to PLN (Poland) are mostly European currencies. CAD (Canada), GPB (United Kingdom), SGD (Singapore), AUD (Australia), and NZD (New Zealand) are grouped into a cluster. It could be because they are Commonwealth countries that have political and cultural backgrounds in common. There is also a cluster of non-European regions, which consists of the list of currencies run from IDR (Indonesia) to ZAR (Africa). Most of those currencies come from the Asian region. It is also noticeable that HKD (Hong Kong) and JPY (Japan) are not correlated with Asian currencies; otherwise, they are correlated with European currencies. The event that the CNY (China) and JPY (Japan) joined XDR (the special draw rights) could be the reason for that. SAR (Saudi Arabia), ARS (Argentina), and PKR (Pakistan) are three currencies that are uncorrelated with all others.
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
