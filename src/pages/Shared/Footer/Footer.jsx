import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: <FacebookIcon />,
      hoverColor: "#4F46E5", // Indigo-600 for homepage theme
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: <TwitterIcon />,
      hoverColor: "#2563EB", // Blue-600 for homepage theme
    },
    {
      href: "mailto:youremail@example.com",
      label: "Email",
      icon: <EmailIcon />,
      hoverColor: "#DB2777", // Pink-600
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      hoverColor: "#2563EB", // Blue-600
    },
  ];

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        backgroundColor: "#EEF2FF", // Light indigo background
        color: "rgba(55, 48, 163, 0.85)", // Dark indigo text
        py: { xs: 3, md: 4 },
        mt: 10,
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 -6px 24px rgba(99, 102, 241, 0.15)", // soft indigo shadow
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          fontSize: "0.9rem",
        }}
      >
        {/* Copyright */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            &copy; {new Date().getFullYear()} BookBarn. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(55, 48, 163, 0.6)",
              fontSize: "0.75rem",
              display: "block",
              mt: 0.5,
            }}
          >
            Crafted with{" "}
            <Box
              component="span"
              sx={{ color: "#DB2777", fontWeight: "bold" }} // pink heart
            >
              ♥
            </Box>{" "}
            for Readers
          </Typography>
        </Box>

        {/* Page Links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            "& a": {
              color: "rgba(55, 48, 163, 0.85)",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.9rem",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#4F46E5", // Indigo-600
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                bottom: "-4px",
                left: 0,
                backgroundColor: "#C7D2FE", // Indigo-200
                transition: "width 0.3s ease-in-out",
                borderRadius: "2px",
              },
              "&:hover::after": {
                width: "100%",
              },
            },
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/about-us-page">About</Link>
          <Link href="/soon-on">Soon On</Link>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
          {socialIcons.map((item) => (
            <Tooltip title={item.label} placement="top" key={item.label} arrow>
              <IconButton
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                sx={{
                  color: "rgba(55, 48, 163, 0.85)",
                  backgroundColor: "rgba(99, 102, 241, 0.12)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: item.hoverColor,
                    backgroundColor: "rgba(99, 102, 241, 0.24)",
                    transform: "translateY(-2px) scale(1.1)",
                    boxShadow: `0 0 12px ${item.hoverColor}55`,
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
