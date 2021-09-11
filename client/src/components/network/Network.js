// import data from "./data1.json";
import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";
import "./Network.css";

export default function Network(props) {
  const ref = useRef();

  const {
    data,
    distance,
    strength,
    maxDistance,
    name,
    nodeName,
    lineName,
    nodeRatio,
  } = props;
  // const prevScrollY = useRef(0);

  // const [goingUp, setGoingUp] = useState(false);
  // const [velo, setVelo] = useState(1);

  const nodes = data.nodes;
  const links = data.links;

  // const dispatch = d3.dispatch("tickend");
  useEffect(() => {
    d3.selectAll(`${nodeName}`).remove();
    d3.selectAll(`${lineName}`).remove();

    // //scroll
    // const handleScroll = () => {
    //   const currentScrollY = window.scrollY;
    //   if (prevScrollY.current < currentScrollY && goingUp) {
    //     setGoingUp(false);
    //     setVelo(1);
    //   }
    //   if (prevScrollY.current > currentScrollY && !goingUp) {
    //     setGoingUp(true);
    //     setVelo(0);
    //   } else {
    //   }

    //   prevScrollY.current = currentScrollY;
    //   console.log(goingUp, currentScrollY, velo);
    // };

    // window.addEventListener("scroll", handleScroll, { passive: true });

    const width = 800;
    const height = 1000;
    const svg = d3
      .select(`.${name}`)
      .attr("width", width)
      .attr("height", height);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((link) => {
            return link.id;
          })
          .distance(distance)
      )
      .force(
        "charge",
        d3.forceManyBody().strength(strength).distanceMax(maxDistance)
      )
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collison",
        d3.forceCollide().radius((d) => d.size)
      );

    //gravity

    const drag = (simulation) => {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    };

    const linkElements = svg
      .append("g")

      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("class", `${lineName}`)
      .attr("position", "absolute")
      .attr("z-index", 0)
      .attr("stroke-width", 1)
      .attr("stroke", (d) => d.color);
    const nodeElements = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", `${nodeName}`)
      .attr("position", "absolute")
      .attr("z-index", 1)
      .attr("r", (d) => d.size * nodeRatio)
      .attr("fill", (d) => d.color)
      .attr("stroke-width", 1)
      .style("stroke", "black")
      .call(drag(simulation));

    const lableElements = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.label)
      .style("display", (d) => d.label);

    const ticked = () => {
      lableElements
        .attr("x", (node) => {
          //   console.log(node.x);
          return node.x;
        })
        .attr("y", (node) => node.y);

      nodeElements
        .attr("cx", (node) => {
          //   console.log(node.x);
          return node.x;
        })
        .attr("cy", (node) => node.y);

      linkElements
        .attr("x1", (link) => {
          return link.source.x;
        })
        .attr("y1", (link) => {
          return link.source.y;
        })
        .attr("x2", (link) => link.target.x)
        .attr("y2", (link) => link.target.y);
    };

    simulation.on("tick", ticked);

    return svg.node();
  });

  return <svg class={name} width={"100%"} height={"1500"} />;
}
