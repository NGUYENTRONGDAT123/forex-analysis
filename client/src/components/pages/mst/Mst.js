import React from "react";
import Slide from "react-reveal";
import "./Mst.css";
import data from "./MST_final.json";
import Network from "../../network/Network";

export default function Mst() {
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
              name={"mst-network"}
              nodeName={"mst-node"}
              lineName={"mst-line"}
              nodeRatio={0.8}
              width1={1920}
              height1={500}
              xOffset={200}
            />
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row">
            <p className="mst-para">
              The minimum spanning tree is widely used to visualize the
              financial networks. While the number of edges displayed in the
              currency network can be up to N(N - 1) (with N is the number of
              currencies), the minimum spanning tree only has (N-1) edges. It
              contains the edges that link all the nodes together, minimize the
              sum of edge weights, and do not include any cycles.
            </p>
            <p className="mst-para">
              According to the betweenness centrality measure (the size of the
              node), CNY (biggest blue node) has the highest betweenness
              centrality to others that show this currency’s node is the nearest
              node among other nodes. After AUD (red node); CZK and PHP (blue
              nodes) are the closest nodes with high betweenness measures. These
              are influential currencies among others so we suggest that
              investors and companies pay attention to them.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
}
