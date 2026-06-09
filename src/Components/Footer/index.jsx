import { Box, Typography, Container, IconButton, Divider } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0a0c10",
        mt: { xs: 6, md: 8 },
        pt: { xs: 6, md: 8 },
        pb: { xs: 3, md: 4 },
        borderTop: "1px solid rgba(255,215,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 2 },
            mb: 5,
          }}
        >
          <Box flex={1.5}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#ffd700",
                letterSpacing: "2px",
                mb: 2,
              }}
            >
              TRENDY
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                maxWidth: "250px",
              }}
            >
              Premium fashion for those who appreciate quality and style.
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#ffd700",
                fontWeight: "bold",
                letterSpacing: "1px",
                mb: 2,
              }}
            >
              SHOP
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              {["Men's Collection", "Women's Collection", "New Arrivals", "Sale"].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#ffd700" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box flex={1}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#ffd700",
                fontWeight: "bold",
                letterSpacing: "1px",
                mb: 2,
              }}
            >
              SUPPORT
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              {["FAQ", "Shipping Info", "Returns", "Contact Us"].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#ffd700" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box flex={1}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#ffd700",
                fontWeight: "bold",
                letterSpacing: "1px",
                mb: 2,
              }}
            >
              FOLLOW US
            </Typography>
            <Box display={"flex"} gap={1}>
              <IconButton
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  "&:hover": { color: "#ffd700", bgcolor: "rgba(255,215,0,0.1)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  "&:hover": { color: "#ffd700", bgcolor: "rgba(255,215,0,0.1)" },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  "&:hover": { color: "#ffd700", bgcolor: "rgba(255,215,0,0.1)" },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  "&:hover": { color: "#ffd700", bgcolor: "rgba(255,215,0,0.1)" },
                }}
              >
                <PinterestIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.05)", my: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              textAlign: "center",
            }}
          >
            © 2024 Trendy Tradition. All Rights Reserved.
          </Typography>
          <Box display={"flex"} gap={2}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#ffd700" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}