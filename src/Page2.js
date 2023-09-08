import page2image1 from "./Images/page2image1.jpg";
import page2image2 from "./Images/page2image2.jpg";
import page2image3 from "./Images/page2image3.jpg";
import page2image4 from "./Images/page2image4.jpg";
import fireChat from "./Images/firechat.png";
import darkerfirechat from "./Images/darkerfirechat.png";
import left from "./Images/backbutton.png"
import navBar from "./Images/navbar.jpg"
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();
  // const [pressed, setpressed] = useState(1); //to toggle between the pressed and not pressed button for fire chat
  // const handleClick = () => {
  //   console.log("firechat"); //replace this line with the router to shift to Page3
  //   setpressed(pressed ^ 1);
  // };
  const handleBackClick = () => {
    navigate("/"); // Navigate to "/page2"
  };
  const handleChatClick = () => {
    navigate("/page3"); // Navigate to "/page2"
  };
  return (
    <>
    <div style={{
    position: "fixed",
    left: "0%",
    right: "80%",
    top: "50%",
    transform: "translateY(-50%)",
  }}>
  
      <button onClick={handleBackClick}> <img src={left} alt="left" style={{width: "50%", height: "20%", cursor: "pointer"}}/>
</button>
      </div>
    <div
      style={{ flexDirection: "column", alignItems: "center", display: "flex" }}
    >
      {/* {pressed ? ( */}
        <img
          onClick={handleChatClick}
          src={fireChat}
          alt="fireChat"
          style={{ width: "70px", zIndex: "1", position: "absolute", cursor: "pointer"}}
        />
      {/* ) : (
        <img
          onClick={handleClick}
          src={darkerfirechat}
          alt="darkerfireChat"
          style={{ width: "70px", zIndex: "1", position: "absolute" }}
        />
      )} */}

      <img src={page2image1} alt="image1" style={{ width: "50%", flex: 1 }} />
      <img src={page2image2} alt="image2" style={{ width: "50%", flex: 1 }} />
      <img src={page2image3} alt="image3" style={{ width: "50%", flex: 1 }} />
      <img src={page2image4} alt="image4" style={{ width: "50%", flex: 1 }} />
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
    </>
  );
}
