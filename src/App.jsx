import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SpendenFormular from "./SpendenFormular";
import Bestaetigung from "./Bestaetigung";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import Rechtliches from "./Rechtliches";
import Kontakt from "./Kontakt";
import UeberUns from "./UeberUns";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrieren" element={<SpendenFormular />} />
        <Route path="/bestaetigung" element={<Bestaetigung />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/rechtliches" element={<Rechtliches />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
      </Routes>
    </Router>
  );
}

export default App;