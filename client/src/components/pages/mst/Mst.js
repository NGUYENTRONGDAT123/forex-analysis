import React from 'react';
import Slide from 'react-reveal';
import './Mst.css';
import data from './MST_final.json';
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
              distance={10}
              strength={-5}
              maxDistance={30}
              name={'mst-network'}
              nodeName={'mst-node'}
              lineName={'mst-line'}
              nodeRatio={0.8}
              width1={1920}
              height1={500}
              xOffset={300}
            />
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row">
            <p className="mst-para">
              A minimum spanning tree reduces the edges down to a subset of edges which connects all the nodes together, without any cycles and with the minimum possible sum of edge weights (correlation value in this case). This essentially provides a skeleton of the graph, minimizing the number of edges and representing the clusters in the network graph more clearly.
            </p>
            <p className="mst-para">
              According to the betweenness centrality measure (the size of the
              node), CNY (biggest blue node) has the highest betweenness
              centrality to others that show this currency’s node is the nearest
              node among other nodes. After AUD (green node), CZK and PHP (yellow
              nodes) are the closest nodes with high betweenness measures. These
              are influential currencies so we suggest that
              investors and companies pay attention to them.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
}
