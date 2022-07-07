import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Boxes from "../components/Boxes";
import Clothes from "../components/Clothes";
import Hats from "../components/Hats";
import Sinks from "../components/Sinks";
import Space from "../components/Space";
import Sunglasses from "../components/Sunglasses";
import Ties from "../components/Ties";
import StartPage from "../components/StartPage";

function RootRoutes() {
  return (
    <div>
      <Routes>
        <Route path="boxes" element={<Boxes />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="hats" element={<Hats />} />
        <Route path="sinks" element={<Sinks />} />
        <Route path="space" element={<Space />} />
        <Route path="sunglasses" element={<Sunglasses />} />
        <Route path="ties" element={<Ties />} />
        <Route path="ties" element={<Ties />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default RootRoutes;
