import logo from "./logo.svg";
import "./App.css";
import Heatmap from "./components/heatmap/Heatmap";
import Network from "./components/network/Network";

function App() {
  return (
    <div className="App">
      <Heatmap />
      <Network />
    </div>
  );
}

export default App;
