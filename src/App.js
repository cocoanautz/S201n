import "./App.css";
import Page2 from "./Page2.js";
import navBar from "./Images/navbar.jpg";
import Page1 from "./Page1";
import Page3 from "./Page3";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          {/* <div
            style={{
              position: "fixed",
              bottom: "0",
              left: "0",
              right: "0",
              textAlign: "center",
              zIndex: "1",
            }}
          >
          <img src={navBar} alt="navbar" style={{ width: "50%" }} />
          </div>         */}
        </Routes>
      </div>
    </Router>
  );
}
