import React from "react";
import Heatmap from "../../heatmap/Heatmap";
import Slide from "react-reveal";
import "./CurrencyNetwork.css";
import data from "./network-react.json";
import Network from "../../network/Network";

export default function CurrencyNetwork() {
  return (
    <section id="network">
      <div className="currency-container">


        <Slide top duration={1300}>
          <div className="row">
            <h1 className="currency-header">Currency Network</h1>
          </div>
          <div className="currency-graph">
            {/* <div className="heatmap-graph"> */}
            <Network
              data={data}
              // distance={10}
              // strength={-5}
              // maxDistance={30}
              distance={250}
              strength={0}
              maxDistance={100}
              name={'currency-network'}
              nodeName={'currency-node'}
              lineName={'currency-line'}
              nodeRatio={0.8}
              width1={1920}
              height1={1100}
              xOffset={100}
            />
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row">
            <p className="mst-para">
            Although heatmap is helpful, it can only present one dimension of data (the correlation between two currencies). As the outlined purpose of the project, even with a heatmap, crucial issues about the most influential currencies and their behavior remain unanswered. The currency network will be utilized to study further based on initial findings achieved from the correlation heatmap. The visualization of the currency network also provides a more accessible method to convey meaningful messages. 
            </p>
            <p className="mst-para">
            A qualitative color palette is used to colorize the nodes based on the communities detected in the currency network. The network visualization provides the audience with a better picture of the data. By removing insignificant edges with correlation values smaller than 0.3, the graph only displays the meaningful correlations between currencies. The edge thickness is scaled based on the magnitude of correlation. The Louvain method successfully detects which groups of currencies behave similarly. There are four clusters that can be seen from the graph: orange, green, blue, and grey. It is noticeable that all of the nodes in the orange cluster (except JPY) come from the European region. The European currencies are strongly correlated to each other and have a significant correlation to other currencies. Looking at the green cluster, there are four currencies namely COP, PEN, BRL, and CLP located in the left part of the cluster. All of them are from South/Latin America and they only connect to the currencies within the same cluster. Therefore, it is true to say that there is no correlation in the currency exchange rate between South/Latin America and Europe. It is also noteworthy that even TRY and RUB come from Europe, they have no correlation with European currencies. It might be because of their unique geographic position, both Turkey and Russia are lying partly in Asia and partly in Europe. Regarding the blue cluster, it contains 12 currencies (9 of them are in Europe and 3 of them are in Asia). It is shown that European currencies are grouped into two different clusters. Moreover, even though MYR, PHP, and THB are from South East Asia, they tend to be more correlated with European currencies.
            </p>
          </div>
        </Slide>




      </div>
    </section>
  );
}
