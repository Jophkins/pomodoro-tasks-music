import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import PomodorkoApp from "../pages/PomodorkoApp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productivity-zone" element={<PomodorkoApp title="Productivity Zone" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
