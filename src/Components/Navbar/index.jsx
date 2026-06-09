import { Close, Menu, ShoppingBag, Person, Search } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
const navigate = useNavigate();
const { totalItems } = useCart();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    if (!menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflow = "auto";
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "LookBook", path: "/lookbook" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          bgcolor: "rgba(22, 25, 29, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,215,0,0.1)",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            width: "90%",
            maxWidth: "1400px",
            height: "70px",
            margin: "0 auto",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#ffd700",
              letterSpacing: "3px",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
          >
            TRENDY
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.name}
                onClick={() => navigate(item.path)}
                sx={{
                  fontSize: "14px",
                  color: "#fff",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#ffd700" },
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": { color: "#ffd700", bgcolor: "transparent" },
              }}
            >
              <Search />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": { color: "#ffd700", bgcolor: "transparent" },
              }}
            >
              <Person />
            </IconButton>
<IconButton
  onClick={() => navigate("/cart")}
  sx={{
    color: "#fff",
    "&:hover": { color: "#ffd700", bgcolor: "transparent" },
    position: "relative",
  }}
>
  <ShoppingBagIcon />
  {totalItems > 0 && (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "18px",
        height: "18px",
        bgcolor: "#ffd700",
        borderRadius: "50%",
        fontSize: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        fontWeight: "bold",
      }}
    >
      {totalItems}
    </Box>
  )}
</IconButton>
            <IconButton
              onClick={handleMenu}
              sx={{
                color: "#fff",
                display: { xs: "flex", md: "none" },
                "&:hover": { color: "#ffd700", bgcolor: "transparent" },
              }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(20px)",
          zIndex: 10000,
          transform: menu ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s ease",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "350px" },
            height: "100%",
            bgcolor: "#0a0c10",
            p: 3,
          }}
        >
          <Box display={"flex"} justifyContent={"flex-end"}>
            <IconButton onClick={handleMenu} sx={{ color: "#ffd700" }}>
              <Close />
            </IconButton>
          </Box>

          <Box mt={4}>
            {menuItems.map((item, index) => (
              <Box key={item.name}>
                <Typography
                  onClick={() => {
                    navigate(item.path);
                    closeMenu();
                  }}
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#fff",
                    py: 2,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#ffd700" },
                  }}
                >
                  {item.name}
                </Typography>
                {index < menuItems.length - 1 && (
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.05)" }} />
                )}
              </Box>
            ))}
          </Box>

          <Box mt={4}>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2 }} />
            <Typography
              sx={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                mt: 3,
              }}
            >
              © 2024 TRENDY
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: "70px" }} />
    </>
  );
}
