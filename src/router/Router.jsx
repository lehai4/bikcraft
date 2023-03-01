import { Routes, Route } from "react-router-dom";
import { Home, Bicycles, Insurance, Contact, NotFound } from "../common";
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/bicycles" element={<Bicycles />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
