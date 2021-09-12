import React from "react";
import Heatmap from "../../heatmap/Heatmap";
import Slide from "react-reveal";
import "./CurrencyNetwork.css";
import data from "./network_3_clusters.json";
import Network from "../../network/Network";

export default function CurrencyNetwork() {
  return (
    <section id="network">
      <div className="currency-container">
        <div className="currency-row">
          <Slide left duration={1300}>
            <div className="currency-col currency-duration">
              <h1 className="currency-header"> Currency </h1>
              <p className="currency-para">
                Although heatmap is helpful, it can only present one dimension
                of data (the correlation between two currencies). The currency
                network will be utilized to study further based on initial
                findings achieved from the correlation heatmap. It also provides
                a more accessible method to convey meaningful messages.
              </p>
              <p className="currency-para">
                Investors would want to identify which assets are correlated and
                uncorrelated with each other in order to assess the unsystematic
                risk in their portfolios. Therefore, from this visualization,
                the user would quickly understand
              </p>
              <p className="currency-para">
                {`- which assets show strong/meaningful correlations (i.e. > 0.4)
                with each other`}
              </p>
              <p className="currency-para">
                - are these correlations positive or negative
              </p>
              <p className="currency-para">
                - which are the most/least ‘connected’ assets. (i.e. which assets
                share the most/least strong correlations with other assets in
                the dataset)
              </p>
              <p className="currency-para">
                - which groups of assets behave similarly (i.e. which assets are
                correlated with the same type of other assets)
              </p>
            </div>
          </Slide>
          <Slide left duration={1300}>
            <div className="currency-col network1">
              {/* <div className="heatmap-graph"> */}
              <Network
                data={data}
                distance={70}
                strength={-600}
                maxDistance={1000000}
                name={"currency-network"}
                nodeName={"currency-node"}
                lineName={"currency-line"}
                nodeRatio={1}
                width1={800}
                height1={1000}
                xOffset={0}
              />
              {/* </div> */}
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
