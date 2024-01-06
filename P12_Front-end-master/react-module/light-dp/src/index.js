import React from "react";
import ReactDOM from "react-dom/client";

import DatePicker from "./lib/components/Datepicker";

const Custom = (y, m, d) => {
  return `${y} - ${m} - ${d}`;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DatePicker />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
