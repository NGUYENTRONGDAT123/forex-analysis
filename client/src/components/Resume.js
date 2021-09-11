import React from "react";
import Slide from "react-reveal";
import Profile from "./pages/HeatmapPage";

export default function Resume() {
  return (
    <section id="heatmap">
      <Slide left duration={1300}>
        <Profile />
      </Slide>
    </section>
  );
}
