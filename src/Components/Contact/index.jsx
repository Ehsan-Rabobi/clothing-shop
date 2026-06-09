import { Box, Button, Typography, Container, TextField, IconButton } from "@mui/material";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        // background: "linear-gradient(135deg, #0f1114 0%, #16191d 100%)",
        mt: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box
            flex={1}
            sx={{
              p: { xs: 3, md: 4 },
              background: "rgba(255,255,255,0.03)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#ffd700",
                letterSpacing: "3px",
                fontSize: "12px",
                mb: 2,
              }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "28px", md: "36px" },
                fontWeight: "bold",
                color: "#fff",
                mb: 3,
              }}
            >
              Let's Talk
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Have a question or want to work with us? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <LocationOnIcon sx={{ color: "#ffd700" }} />
                <Box>
                  <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                    Visit Us
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                    10 Street Name, New York, NY 10013
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <EmailIcon sx={{ color: "#ffd700" }} />
                <Box>
                  <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                    Email Us
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                    hello@trendytradition.com
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <PhoneIcon sx={{ color: "#ffd700" }} />
                <Box>
                  <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                    Call Us
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            flex={1}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 3, md: 4 },
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Send us a message
            </Typography>

            <TextField
              fullWidth
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{
                mb: 2.5,
                "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffd700" },
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                  "&.Mui-focused fieldset": { borderColor: "#ffd700" },
                },
              }}
            />

            <TextField
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{
                mb: 2.5,
                "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffd700" },
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                  "&.Mui-focused fieldset": { borderColor: "#ffd700" },
                },
              }}
            />

            <TextField
              fullWidth
              name="message"
              label="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              sx={{
                mb: 3,
                "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffd700" },
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                  "&.Mui-focused fieldset": { borderColor: "#ffd700" },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                background: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
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
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}