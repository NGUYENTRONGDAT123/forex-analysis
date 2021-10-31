import React from 'react';
import Slide from 'react-reveal';
import './Mst.css';
import data from './mst-react.json';
import Network from '../../network/Network';

export default function Mst () {
  return (
    <section id="mst">
      <div className="mst-container">
        <Slide top duration={1300}>
          <div className="row">
            <h1 className="mst-header">Minimum Spanning Tree </h1>
          </div>
          <div className="mst-graph">
            {/* <div className="heatmap-graph"> */}
            <Network
              data={data}
              // distance={10}
              // strength={-5}
              // maxDistance={30}
              distance={80}
              strength={0}
              maxDistance={40}
              name={'mst-network'}
              nodeName={'mst-node'}
              lineName={'mst-line'}
              nodeRatio={0.8}
              width1={1920}
              height1={1000}
              xOffset={100}
            />
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row">
            <p className="mst-para">
              A minimum spanning tree reduces the edges down to a subset of edges which connects all the nodes together, without any cycles and with the minimum possible sum of edge weights (correlation value in this case). This essentially provides a skeleton of the graph, minimizing the number of edges and representing the clusters in the network graph more clearly.
            </p>
            <p className="mst-para">
            A qualitative color palette is used to colorize the nodes based on their region (i.e., Europe, orange; Asia & Pacific, dark green; South/Latin America, blue; Africa, pink; North America, light green; Middle East, yellow). The minimum spanning tree is a more readable and well-structured version of the previous network graph. There is some knowledge obtained from the minimum spanning tree. The NOK is at the center of the FX network since it connects currencies from four different regions (i.e., Asia, South/Latin America, Middle East, and Europe). The majority of the currencies are grouped together based on geographical regions. The currencies of Commonwealth countries are connected together such as MYR, CAD, AUD, NZD, and SGD. The currencies of Europe are the most closely linked. EUR has a predominant position in the European monetary system. JPY is connected to European currencies, whereas CNY is more attached to the Asian cluster despite the fact that both currencies join the special drawing rights.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
}
