import { Box, Button, Stack, Typography, Chip } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/1.webp";
import img2 from "../../img/2.webp";
import img3 from "../../img/3.webp";
import img4 from "../../img/4.webp";
import img5 from "../../img/5.webp";
import img6 from "../../img/6.webp";
import img7 from "../../img/7.webp";
import img8 from "../../img/8.webp";

export default function CardProduct() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      name: "Men's Jacket",
      category: "Outerwear",
      price: "297",
      img: img1,
      isNew: true,
    },
    {
      name: "Men's Boots",
      category: "Boots",
      price: "384.3",
      img: img2,
      isNew: false,
    },
    {
      name: "Women's Leather Jacket",
      category: "Leather Jackets",
      price: "285.",
      img: img3,
      isNew: true,
    },
    {
      name: "Women's Ankle Boots",
      category: "Ankle Boots",
      price: "311.05",
      img: img4,
      isNew: false,
    },
    {
      name: "Women's Formal Coat",
      category: "Women's Apparel",
      price: "215",
      img: img5,
      isNew: true,
    },
    {
      name: "Men's Polo Shirt",
      category: "Men's Apparel",
      price: "199.99",
      img: img6,
      isNew: false,
    },
    {
      name: "Men's Blazer",
      category: "Suits & Blazers",
      price: "700",
      img: img7,
      isNew: true,
    },
    {
      name: "Men's Monochrome College Shoes",
      category: "Casual Shoes / Oxfords",
      price: "290",
      img: img8,
      isNew: true,
    },
  ]);

  const items = data.map((e, index) => (
    <Box
      key={index}
      sx={{
        height: { xs: "420px", sm: "420px", md: "480px" },
        width: { xs: "100%", sm: "300px", md: "320px" }, 
        borderRadius: "24px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          // borderColor: "rgba(255,215,0,0.3)",
        },
      }}
      onClick={() => navigate(`/product/${index}`)}
    >
      <Box
        sx={{
          height: "60%", 
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src={e.img}
            alt={e.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {e.isNew && (
          <Chip
            label="NEW"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              bgcolor: "#ffd700",
              color: "#000",
              fontWeight: "bold",
              fontSize: "10px",
              letterSpacing: "1px",
              zIndex: 1,
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          height: "40%",
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "0.5px",
            }}
          >
            {e.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
              color: "#ffd700",
              mt: 0.5,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {e.category}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ffd700",
            }}
          >
            ${e.price}
          </Typography>
          <Button
            sx={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: "bold",
              textTransform: "none",
              borderBottom: "2px solid #ffd700",
              borderRadius: 0,
              p: 0,
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#ffd700",
                borderBottomColor: "#ffd700",
              },
            }}
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/product/${index}`);
            }}
          >
            View Details →
          </Button>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "650px",
        mt: "80px",
        py: 3,
        bgcolor: "#16191d",
      }}
    >
      <Typography
        textAlign={"center"}
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: "4px",
        }}
      >
        FESTIVAL COLLECTION
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          fontSize: "14px",
          color: "#ffd700",
          letterSpacing: "3px",
          mt: 1,
          textTransform: "uppercase",
        }}
      >
        Limited Edition
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: "1400px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          margin: "50px auto 0",
        }}
      >
        {items}
      </Box>
    </Stack>
  );
}
