import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import Volunteer from "./pages/volunteer/volunteer";
import Donor from "./pages/donor/Donor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donor" element={<Donor />} />
      </Routes>
    </Router>
  );
}

export default App;
