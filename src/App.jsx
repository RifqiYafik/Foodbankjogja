import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Informasi from "./pages/Informasi";
import Donasi from "./pages/Donasi";
import Relawan from "./pages/Relawan";
import Kontak from "./pages/Kontak";
import DonasiStatus from "./pages/DonasiStatus";
import RelawanDetail from "./pages/RelawanDetail";
import FormulirDana from "./Components/FormulirDana";
import FormulirPangan from "./Components/FormulirPangan";
import Login from "./admin/src/components/login/Login";
import Volunteer from "./admin/src/pages/volunteer/volunteer";
import Homee from "./admin/src/pages/home/Home";
import Donor from "./admin/src/pages/donor/Donor";

function App() {
  return (
    <>
      <Router>
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
          <Route path="/admin" element={<Login />} />
          <Route path="/home" element={<Homee />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donor" element={<Donor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
