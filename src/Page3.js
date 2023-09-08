import React, { useState } from "react";
import page2image1 from "./Images/page2image1.jpg";
import darkerfirechat from "./Images/darkerfirechat.png";
import left from "./Images/backbutton.png";
import navBar from "./Images/navbar.jpg";
import send from "./Images/send.png";
import { useNavigate } from "react-router-dom";

export default function Page3() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/page2"); // Navigate back to "/page2"
  };

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { text: message, sender: "You" }]);
      setMessage(""); // Clear the input field after sending a message
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            left: "0",
            top: "50%", // Center vertically
            transform: "translateY(-50%)", // Center vertically
            zIndex: "1",
          }}
        >
          <button onClick={handleBackClick}>
            <img
              src={left}
              alt="left"
              style={{ width: "50px", height: "20px", cursor: "pointer" }}
            />
          </button>
        </div>
        <img
          src={darkerfirechat}
          alt="darkerfireChat"
          style={{
            width: "70px",
            zIndex: "1",
            position: "absolute",
            top: "0",
          }}
        />
        <img
          src={page2image1}
          alt="image1"
          style={{ width: "50%", flex: 1 }}
        />
        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center",
            zIndex: "1",
            width: "50%",
            margin: "0 auto", // Center the chat box horizontally
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "46%", // Fill available vertical space
          }}
        >
          <div
            style={{
              background: "#f5f5f5",
              padding: "10px",
              flex: "1", // Expand to fill available space
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ margin: "0 auto", fontSize: "24px", color: "red" }}>FireChat</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                maxHeight: "100px", // Maximum height for chat messages
                overflowY: "auto",
                marginBottom: "10px",
                flex: "1", // Expand to fill available space
              }}
            >
              {chat.map((message, index) => (
                <div key={index}>
                  <span>{message.sender}: </span>
                  {message.text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ flex: "1", height: "25px" }}
            />
            <img 
                src={send}
                alt="Send"
                style={{cursor: "pointer", height: "30px"}}
                onClick={handleSendMessage}
            />
          </div>
          <img src={navBar} alt="navbar" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}
