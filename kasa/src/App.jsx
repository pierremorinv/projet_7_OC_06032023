import "./Style/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./components/NavBar";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Datas from "./components/Datas";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Datas />
      <Footer />
    </div>
  );
}

export default App;
