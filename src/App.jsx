import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Informasi from "./pages/Informasi";
import Donasi from "./pages/Donasi";
import Relawan from "./pages/Relawan";
import Kontak from "./pages/Kontak";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DonasiStatus from "./pages/DonasiStatus";
import RelawanDetail from "./pages/RelawanDetail";
import FormulirDana from "./Components/FormulirDana";
import FormulirPangan from "./Components/FormulirPangan";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/donasi/detail-donasi-dana" element={<FormulirDana />} />
          <Route
            path="/donasi/detail-donasi-pangan"
            element={<FormulirPangan />}
          />
          <Route path="/statusdonasi" element={<DonasiStatus />} />
          <Route path="/relawan" element={<Relawan />} />
          <Route path="/relawan/relawan-detail" element={<RelawanDetail />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
