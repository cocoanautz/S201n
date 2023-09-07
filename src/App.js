import "./App.css";
import Page2 from "./Page2.js";
import navBar from "./Images/navbar.jpg";
import Page1 from "./Page1";

export default function App() {
  return (
    <div className="App">
      <Page1 />
      {/*
      <Page2 /> {//can adjust this to page1 once navigation done
      }
      */}
  <div
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
  </div>
</div>
  );
}
