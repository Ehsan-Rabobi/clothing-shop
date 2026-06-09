import { Box } from "@mui/material";
import React from "react";
import Atropos from "atropos/react";


export default function CardModel() {
  return (
    <>
      <Box
        width={"100%"}
        minHeight={"300px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"18px"}
        flexWrap={"wrap"}
      >
        <Atropos activeOffset={40} shadowScale={1.05}>
          <img
            src={"./assets/image/image1.jpg"}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
        <Atropos activeOffset={40} shadowScale={1.05}>
          <img
            src={"./assets/image/image2.jpg"}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
        <Atropos activeOffset={40} shadowScale={1.05}>
          <img
            src={"./assets/image/image3.webp"}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
        <Atropos activeOffset={40} shadowScale={1.05}>
          <img
            src={"./assets/image/image4.webp"}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
      </Box>
    </>
  );
}
