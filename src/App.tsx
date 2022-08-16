import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DetailCardComponent from "../src/components/DetailCardComponent";
import Dashboard from "./components/Dashboard";
import DataValues from "./components/DataValues";
import IndicatorValues from "./components/IndicatorValues";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Dashboard />}></Route>{" "}
        <Route path="/:title" element={<DetailCardComponent />}></Route>{" "}
        <Route path="/:title/data-values" element={<DataValues />}></Route>{" "}
        <Route
          path="/:title/indicator-values"
          element={<IndicatorValues />}
        ></Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
