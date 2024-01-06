import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/App";
import EmployeeList from "./pages/Employee";

function AppRoute() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employee" element={<EmployeeList />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default AppRoute;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
