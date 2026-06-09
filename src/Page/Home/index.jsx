import React from "react";
import Navbar from "../../Components/Navbar";
import { Box, Typography, Container, Divider } from "@mui/material";
import CardModel from "../../Components/CardModel";
import CardProduct from "../../Components/CardProduct";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Box
        sx={{
          width: "100%",
          minHeight: "400px",
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          // background: "linear-gradient(135deg, #16191d 0%, #1e2328 100%)",
          py: 8,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#ffd700",
            letterSpacing: "4px",
            mb: 2,
            fontWeight: "300",
          }}
        >
          SINCE 2024
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "36px", md: "64px" },
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "-1px",
            mb: 3,
          }}
        >
          Trendy Tradition
        </Typography>
        
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            color: "rgba(255,255,255,0.7)",
            maxWidth: "700px",
            lineHeight: 1.8,
            px: 2,
          }}
        >
          I love fashion. I also love clothes that live longer than a single season.
          After all, if you've found an item that you really love, don't you want 
          to wear it longer than a single season? We wanted to build a store that 
          sells clothes that are more than just trendy.
        </Typography>
        
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "2px",
              bgcolor: "#ffd700",
            }}
          />
          <Box
            sx={{
              width: "20px",
              height: "2px",
              bgcolor: "rgba(255,255,255,0.3)",
            }}
          />
        </Box>
      </Box>

      <CardModel />

      <Box
        sx={{
          width: "100%",
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #0f1114 0%, #16191d 100%)",
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box flex={1}>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffd700",
                  letterSpacing: "3px",
                  mb: 2,
                  fontSize: "12px",
                }}
              >
                VISIT OUR STORE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "28px", md: "42px" },
                  fontWeight: "bold",
                  color: "#fff",
                  lineHeight: 1.3,
                  mb: 4,
                }}
              >
                New York's trendy
                <br />
                TriBeCa neighborhood
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                It's one of the liveliest shopping districts around.
                Experience fashion like never before in our flagship store.
              </Typography>
              
              <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 3 }} />
              
              <Box display={"flex"} gap={6}>
                <Box>
                  <Typography sx={{ color: "#ffd700", fontSize: "14px", mb: 1 }}>
                    LOCATION
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                    10 Street Name
                    <br />
                    New York, NY 10013
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#ffd700", fontSize: "14px", mb: 1 }}>
                    HOURS
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                    Mon - Sat: 9am - 5pm
                    <br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              flex={1}
              sx={{
                height: "350px",
                background: "linear-gradient(135deg, #ffd70020 0%, #ffd70005 100%)",
                borderRadius: "32px",
                border: "1px solid rgba(255,215,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "rgba(255,215,0,0.5)", fontSize: "48px" }}>
                🗽
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <CardProduct />
      <Contact />
      <Footer />
    </>
  );
}