import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";
import HeatmapPage from "./components/pages/heatmapPage/HeatmapPage";
import CurrencyNetwork from "./components/pages/currencyNetwork/CurrencyNetwork";
import Mst from "./components/pages/mst/Mst";

function App() {
  return (
    <div className="App">
      <Header data={"alo"} />
      <About data={"alo"} />
      <HeatmapPage />
      <CurrencyNetwork />
      <Mst />
      <Footer data={"alo"} />
    </div>
  );
}

export default App;
