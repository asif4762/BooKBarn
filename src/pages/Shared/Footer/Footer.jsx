import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        py: 4,
        mt: 10,
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 -4px 12px rgba(118, 75, 162, 0.3)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          fontSize: "0.9rem",
        }}
      >
        <Typography variant="body2" sx={{ textAlign: { xs: "center", md: "left" } }}>
          &copy; {new Date().getFullYear()} BookBarn. All rights reserved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            "& a": {
              color: "inherit",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": { color: "#a4b0ff" },
            },
          }}
        >
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#faq">FAQ</Link>
        </Box>

        <Box>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#3b5998" },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#00acee" },
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:youremail@example.com"
            aria-label="Email"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#f39c12" },
            }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#0e76a8" },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
