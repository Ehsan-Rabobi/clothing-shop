import {
  Box,
  Button,
  Stack,
  Typography,
  Chip,
  Container,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext";
import img1 from "../../img/1.webp";
import img2 from "../../img/2.webp";
import img3 from "../../img/3.webp";
import img4 from "../../img/4.webp";
import img5 from "../../img/5.webp";
import img6 from "../../img/6.webp";
import img7 from "../../img/7.webp";
import img8 from "../../img/8.webp";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // State برای نوتیفیکیشن
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const showNotification = (message, severity = "success") => {
    setSnackbar({
      open: true,
      message: message,
      severity: severity,
    });
  };

  const products = [
    {
      id: 0,
      name: "Men's Jacket",
      category: "Outerwear",
      price: "297",
      img: img1,
      description:
        "Premium quality men's jacket crafted from the finest materials. Features a sleek design with comfortable fit perfect for any occasion.",
      fullDescription:
        "This luxurious jacket combines style and functionality. Made with high-grade fabric that ensures durability and comfort throughout the year. The perfect addition to any modern wardrobe.",
    },
    {
      id: 1,
      name: "Men's Boots",
      category: "Boots",
      price: "384",
      img: img2,
      description:
        "Handcrafted leather boots with exceptional durability and timeless design.",
      fullDescription:
        "These premium boots are built to last. Featuring genuine leather construction, reinforced stitching, and a comfortable insole for all-day wear.",
    },
    {
      id: 2,
      name: "Women's Leather Jacket",
      category: "Leather Jackets",
      price: "285",
      img: img3,
      description:
        "Genuine leather jacket that exudes elegance and edge simultaneously.",
      fullDescription:
        "A statement piece for the modern woman. This leather jacket offers both warmth and style, with a tailored fit that flatters every silhouette.",
    },
    {
      id: 3,
      name: "Women's Ankle Boots",
      category: "Ankle Boots",
      price: "311",
      img: img4,
      description:
        "Trendy ankle boots perfect for both casual and formal outfits.",
      fullDescription:
        "Versatile and chic, these ankle boots feature a comfortable heel height and premium suede finish. Perfect for transitioning between seasons.",
    },
    {
      id: 4,
      name: "Women's Formal Coat",
      category: "Women's Apparel",
      price: "215",
      img: img5,
      description: "Elegant formal coat for sophisticated occasions.",
      fullDescription:
        "Make a lasting impression with this tailored coat. Designed with attention to detail, featuring a flattering cut and premium wool blend fabric.",
    },
    {
      id: 5,
      name: "Men's Polo Shirt",
      category: "Men's Apparel",
      price: "199",
      img: img6,
      description: "Classic polo shirt made from breathable cotton.",
      fullDescription:
        "A wardrobe essential. This polo shirt combines comfort with style, featuring a classic fit and premium cotton material that breathes naturally.",
    },
    {
      id: 6,
      name: "Men's Suit Jacket",
      category: "Men's Apparel",
      price: "349",
      img: img7,
      description: "Tailored fit suit jacket crafted from premium wool blend.",
      fullDescription:
        "Elevate your formal wardrobe with this perfectly tailored suit jacket. Made from a luxurious wool-blend fabric that resists wrinkles and drapes beautifully. Ideal for business meetings, weddings, or any formal occasion.",
    },
    {
      id: 7,
      name: "Men's Mono College Shoes",
      category: "Men's Footwear",
      price: "129",
      img: img8,
      description:
        "Minimalist monochrome leather shoes for a clean, sophisticated look.",
      fullDescription:
        "Understated elegance meets everyday comfort. These mono college shoes feature premium full-grain leather in a single tone, with a cushioned insole and durable rubber outsole. Perfect for office casual days, college, or weekend outings.",
    },
  ];

  const product = products[parseInt(id)];

  // توابع دکمه‌ها
  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: parseInt(product.price),
      img: product.img,
      category: product.category,
    };
    addToCart(productToAdd);
    showNotification(`${product.name} added to cart successfully! 🛒`, "success");
  };

  const handleBuyNow = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: parseInt(product.price),
      img: product.img,
      category: product.category,
    };
    addToCart(productToAdd);
    showNotification(`${product.name} added to cart! Redirecting...`, "info");
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)",
        }}
      >
        <Box textAlign="center" p={4}>
          <Typography variant="h2" sx={{ color: "#ffd700", mb: 2 }}>
            404
          </Typography>
          <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
            Product Not Found
          </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
              color: "#000",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 5px 20px rgba(255,215,0,0.3)",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#16191d",
        pt: { xs: 8, md: 12 },
        pb: 6,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Button
          onClick={() => navigate(-1)}
          sx={{
            color: "#ffd700",
            mb: 4,
            "&:hover": {
              transform: "translateX(-5px)",
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} /> Back to Products
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 3, md: 6 },
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            borderRadius: "32px",
            padding: { xs: 3, md: 5 },
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          }}
        >
          <Box
            sx={{
              flex: 1.2,
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
                transition: "transform 0.5s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                display: "flex",
                gap: 1,
              }}
            >
              <Chip
                label="PREMIUM"
                sx={{
                  bgcolor: "#ffd700",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "42px" },
                fontWeight: "bold",
                color: "#fff",
                letterSpacing: "-0.5px",
              }}
            >
              {product.name}
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#ffd700",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              {product.category}
            </Typography>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 1 }} />

            <Typography
              sx={{
                fontSize: { xs: "36px", md: "48px" },
                fontWeight: "bold",
                color: "#ffd700",
              }}
            >
              ${product.price}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
              }}
            >
              {product.fullDescription || product.description}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography
                sx={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", mb: 1 }}
              >
                ✨ Features:
              </Typography>
              <Box
                component="ul"
                sx={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", pl: 2 }}
              >
                <li>Premium quality materials</li>
                <li>Free shipping worldwide</li>
                <li>30-day return policy</li>
                <li>Limited edition collection</li>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                mt: 2,
              }}
            >
              <Button
                fullWidth
                onClick={handleAddToCart}
                sx={{
                  background:
                    "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
                  color: "#000",
                  fontWeight: "bold",
                  py: 1.5,
                  borderRadius: "40px",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 10px 25px rgba(255,215,0,0.3)",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ mr: 1 }} /> Add to Cart
              </Button>

              <Button
                fullWidth
                onClick={handleBuyNow}
                sx={{
                  border: "2px solid rgba(255,215,0,0.5)",
                  color: "#ffd700",
                  fontWeight: "bold",
                  py: 1.5,
                  borderRadius: "40px",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#ffd700",
                    backgroundColor: "rgba(255,215,0,0.1)",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                mt: 3,
                pt: 2,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Box textAlign="center">
                <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>
                  ✓
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
                >
                  Free Shipping
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>
                  ✓
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
                >
                  Secure Payment
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>
                  ✓
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
                >
                  24/7 Support
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Snackbar نوتیفیکیشن */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            bgcolor: snackbar.severity === "success" ? "#1a2e1a" : "#1a2e3e",
            color: "#ffd700",
            "& .MuiAlert-icon": {
              color: "#ffd700",
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}