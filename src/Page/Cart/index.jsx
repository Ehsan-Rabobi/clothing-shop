import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCart } from "../../Context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#16191d", pt: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box textAlign="center" py={10}>
            <Typography variant="h1" sx={{ fontSize: "64px", mb: 2 }}>🛒</Typography>
            <Typography variant="h5" sx={{ color: "#fff", mb: 2 }}>
              Your cart is empty
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 4 }}>
              Looks like you haven't added anything to your cart yet.
            </Typography>
            <Button
              onClick={() => navigate("/")}
              sx={{
                background: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
                color: "#000",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: "40px",
              }}
            >
              Continue Shopping →
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#16191d", pt: { xs: 8, md: 12 }, pb: 6 }}>
      <Container maxWidth="lg">
        <Button
          onClick={() => navigate(-1)}
          sx={{ color: "#ffd700", mb: 4, "&:hover": { transform: "translateX(-5px)" } }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} /> Back
        </Button>

        <Typography
          variant="h4"
          sx={{ color: "#fff", fontWeight: "bold", mb: 4, letterSpacing: "2px" }}
        >
          Shopping Cart ({totalItems} items)
        </Typography>

        <Box
          sx={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden",
          }}
        >
          {/* هدر جدول - فقط در دسکتاپ */}
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              gridTemplateColumns: "2fr 1fr 1.5fr 0.5fr",
              gap: 2,
              p: 2,
              bgcolor: "rgba(0,0,0,0.3)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>Product</Typography>
            <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>Price</Typography>
            <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>Quantity</Typography>
            <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>Total</Typography>
          </Box>

          {/* آیتم‌های سبد خرید */}
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1.5fr 0.5fr" },
                gap: 2,
                p: 2,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                alignItems: "center",
              }}
            >
              {/* اطلاعات محصول */}
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Box>
                  <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                    {item.category}
                  </Typography>
                </Box>
              </Box>

              {/* قیمت */}
              <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>
                ${item.price}
              </Typography>

              {/* تعداد و دکمه حذف */}
              <Box display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"}>
                <IconButton
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    "&:hover": { color: "#ffd700", borderColor: "#ffd700" },
                  }}
                  size="small"
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", minWidth: "30px", textAlign: "center" }}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    "&:hover": { color: "#ffd700", borderColor: "#ffd700" },
                  }}
                  size="small"
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    "&:hover": { color: "#ff4444" },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>

              {/* جمع کل هر آیتم */}
              <Typography sx={{ color: "#ffd700", fontWeight: "bold" }}>
                ${item.price * item.quantity}
              </Typography>
            </Box>
          ))}

          {/* بخش جمع کل */}
          <Box
            sx={{
              p: 3,
              bgcolor: "rgba(0,0,0,0.3)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Button
              onClick={clearCart}
              sx={{
                color: "#ff4444",
                border: "1px solid #ff4444",
                "&:hover": { bgcolor: "rgba(255,68,68,0.1)" },
              }}
            >
              Clear Cart
            </Button>

            <Box textAlign="right">
              <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 1 }}>
                Total ({totalItems} items):
              </Typography>
              <Typography sx={{ fontSize: "32px", fontWeight: "bold", color: "#ffd700" }}>
                ${totalPrice}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} gap={2} justifyContent={"flex-end"} mt={4}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "40px",
            }}
          >
            Continue Shopping
          </Button>
          <Button
            sx={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
              color: "#000",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: "40px",
            }}
          >
            Checkout →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}