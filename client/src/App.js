import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
// import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
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
