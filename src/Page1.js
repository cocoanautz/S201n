import topStore from "./Images/page1top.jpg";
import fireItem from "./Images/Biketyre.png";
import box2 from "./Images/box2.jpg";
import box3 from "./Images/box3.jpg";
import box4 from "./Images/box4.jpg";
import navBar from "./Images/navbar.jpg";
import { useNavigate } from "react-router-dom";

import { Grid, Paper } from "@mui/material";

export default function Page1() {
  const navigate = useNavigate();
  const rectangles = [
    {
      id: 1,
      color: "white",
      imageUrl: fireItem, // Replace with the actual image URL
    },
    {
      id: 2,
      color: "white",
      imageUrl: box2, // Replace with the actual image URL
    },
    {
      id: 3,
      color: "white",
      imageUrl: box3, // Replace with the actual image URL
    },
    {
      id: 4,
      color: "white",
      imageUrl: box4, // Replace with the actual image URL
    },
  ];

  const handleImageClick = () => {
    navigate("/page2"); // Navigate to "/page2"
  };

  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          marginTop: "100px",
          borderStyle: 'solid',
          borderWidth: "3",
          border: "black",
          width: "520px",
          height: "867px",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            position: "relative",
            width: "100%",
            height: "800px",
            whiteSpace: "nowrap",
            overflowY: "scroll",
          }}
        >
          <img
            src={topStore}
            alt="topStore"
            style={{ width: "100%", flex: 1, zIndex: 1 }}
          />

          <Grid container spacing={2} style={{ width: "100%", zIndex: 2 }}>
            {rectangles.map((rectangle) => (
              <Grid item xs={6} sm={6} md={6} lg={6} key={rectangle.id}>
                <Paper
                  style={{
                    width: "100%",
                    height: "100%", // Adjust the height as needed
                    backgroundColor: rectangle.color,
                    position: "relative",
                  }}
                >
                  {rectangle.id === 1 
                   ? ( // Conditionally render the link only for fireItem
                    <a
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 2, // Ensure the link is clickable
                      }}
                      onClick={handleImageClick}
                    >
                      <img
                        src={rectangle.imageUrl}
                        alt={`Image ${rectangle.id}`}
                        style={{
                          width: "95%",
                          height: "100%",
                          objectFit: "cover", // Adjust how the image fits within the rectangle
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      src={rectangle.imageUrl}
                      alt={`Image ${rectangle.id}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Adjust how the image fits within the rectangle
                      }}
                    />
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
        <img src={navBar} alt="navbar" style={{ width:'100%' }}/>
      </div>
    </div>
  );
}
