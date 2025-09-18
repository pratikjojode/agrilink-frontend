import React from "react";
import { Routes, Route } from "react-router-dom";

import AgriLinkHome from "./AgriLinkPages/AgriLinkHome";
import AgrilinkDemo from "./AgriLinkPages/AgrilinkDemo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AgriLinkHome />} />
        <Route path="/demo" element={<AgrilinkDemo />} />
      </Routes>
    </>
  );
};

export default App;
