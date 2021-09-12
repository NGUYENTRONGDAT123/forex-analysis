import { useState } from "react";
import * as d3 from "d3";
import * as csv from "./data.csv";
import { useEffect } from "react/cjs/react.development";
export function FecthCSV() {
  const [repo, setRepo] = useState([]);

  const getRepo = async () => {
    try {
      await d3
        .csv(
          "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
        )
        .then((d) => {
          setRepo(d);
          console.log(d);
          console.log(repo);
        });
      return () => undefined;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRepo();
  }, [repo]);

  console.log(repo);
  if (repo !== []) {
    return repo;
  }
}
