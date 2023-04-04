import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import HeaderFooterPage from "./pages/HeaderFooterePage";
import HeaderPage from "./pages/HeaderPage";
import Main from "pages/Main";
import CrimeType from "pages/CrimeType";
import SimulationList from "pages/SimulationList";
import Quiz from "pages/Quiz";
import SimulationRoom from "pages/SimulationRoom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderFooterPage />}>
          <Route path="/" element={<Main target1={10000000000} target2={20000} target3={300} duration={5000} />} />
          <Route path="/crime-type/*" element={<CrimeType />} />
        </Route>
        <Route element={<HeaderPage />}>
          <Route path="/" element={<Main target1={10000000000} target2={20000} target3={300} duration={5000} />} />
          <Route path="/simulation-list/*" element={<SimulationList />} />
          <Route path="/quiz/*" element={<Quiz />} />
        </Route>
        <Route path="/simulation-room/*" element={<SimulationRoom />} />
      </Routes>
    </>
  );
}

export default App;
