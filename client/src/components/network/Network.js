import data from "./data.json";
import * as d3 from "d3";
import { useRef, useEffect } from "react";
import { forceSimulation } from "d3-force";

export default function Network(props) {
  const ref = useRef();

  const nodes = data.nodes;
  const links = data.links;

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const svg = d3.select("svg").attr("width", width).attr("height", height);

    console.log(links);
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((link) => {
            return link.id;
          })
          .strength((link) => link.strength)
      )
      .force("charge", d3.forceManyBody().strength(-20))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const dragDrop = d3
      .drag()
      .on("start", (node) => {
        node.fx = node.x;
        node.fy = node.y;
      })
      .on("drag", (event, node) => {
        simulation.alphaTarget(0.7).restart();
        node.fx = event.x;
        node.fy = event.y;
      })
      .on("end", (event, node) => {
        if (!event.active) {
          simulation.alphaTarget(0);
        }
        node.fx = null;
        node.fy = null;
      });

    function getNodeColor(node) {
      return node.level === 1 ? "red" : "gray";
    }
    const nodeElements = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", getNodeColor)
      .call(dragDrop)
      .on("click", selectNode);

    const textElements = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((node) => node.label)
      .attr("font-size", 15)
      .attr("dx", 15)
      .attr("dy", 4);

    const linkElements = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke-width", 1)
      .attr("stroke", "#E5E5E5");

    function getNeighbors(node) {
      return links.reduce(
        (neighbors, link) => {
          if (link.target.id === node.id) {
            neighbors.push(link.source.id);
          } else if (link.source.id === node.id) {
            neighbors.push(link.target.id);
          }
          return neighbors;
        },
        [node.id]
      );
    }
    function isNeighborLink(node, link) {
      return link.target.id === node.id || link.source.id === node.id;
    }

    function getNodeColor(node, neighbors) {
      if (neighbors.indexOf(node.id)) {
        return node.level === 1 ? "blue" : "green";
      }
      return node.level === 1 ? "red" : "gray";
    }
    function getTextColor(node, neighbors) {
      return neighbors.indexOf(node.id) ? "green" : "black";
    }
    function getLinkColor(node, link) {
      return isNeighborLink(node, link) ? "green" : "#E5E5E5";
    }

    function selectNode(selectedNode) {
      const neighbors = getNeighbors(selectedNode);
      nodeElements.attr("fill", (node) => getNodeColor(node, neighbors));
      textElements.attr("fill", (node) => getTextColor(node, neighbors));
      linkElements.attr("stroke", (link) => getLinkColor(selectedNode, link));
    }

    simulation.nodes(nodes).on("tick", () => {
      nodeElements
        .attr("cx", (node) => {
          //   console.log(node.x);
          return node.x;
        })
        .attr("cy", (node) => node.y);

      textElements.attr("x", (node) => node.x).attr("y", (node) => node.y);
      linkElements
        .attr("x1", (link) => {
          return link.source.x;
        })
        .attr("y1", (link) => {
          return link.source.y;
        })
        .attr("x2", (link) => link.target.x)
        .attr("y2", (link) => link.target.y);
    });

    return svg.node();
  });

  return (
    <div>
      <svg ref={ref} width={"100vh"} height={"100vh"} />
    </div>
  );
}
