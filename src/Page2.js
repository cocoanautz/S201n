import page2image1 from "./Images/page2image1.jpg";
import page2image2 from "./Images/page2image2.jpg";
import page2image3 from "./Images/page2image3.jpg";
import page2image4 from "./Images/page2image4.jpg";
import fireChat from "./Images/firechat.png";
import darkerfirechat from "./Images/darkerfirechat.png";
import { useState } from "react";

export default function Page2() {
  const [pressed, setpressed] = useState(1); //to toggle between the pressed and not pressed button for fire chat
  const handleClick = () => {
    console.log("firechat");
    setpressed(pressed ^ 1);
  };
  return (
    <div
      style={{ flexDirection: "column", alignItems: "center", display: "flex" }}
    >
      {pressed ? (
        <img
          onClick={handleClick}
          src={fireChat}
          alt="fireChat"
          style={{ width: "70px", zIndex: "1", position: "absolute" }}
        />
      ) : (
        <img
          onClick={handleClick}
          src={darkerfirechat}
          alt="darkerfireChat"
          style={{ width: "70px", zIndex: "1", position: "absolute" }}
        />
      )}
      <img src={page2image1} alt="image1" style={{ width: "50%", flex: 1 }} />
      <img src={page2image2} alt="image2" style={{ width: "50%", flex: 1 }} />
      <img src={page2image3} alt="image3" style={{ width: "50%", flex: 1 }} />
      <img src={page2image4} alt="image4" style={{ width: "50%", flex: 1 }} />
    </div>
  );
}
