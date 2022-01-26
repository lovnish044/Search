import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Result } from "./Result";
const Outes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route exact path="/search" element={<Result />} />
        <Route exact path="/images" element={<Result />} />
        <Route exact path="/videos" element={<Result />} />
        <Route exact path="/news" element={<Result />} />
      </Routes>
    </div>
  );
};

export default Outes;
