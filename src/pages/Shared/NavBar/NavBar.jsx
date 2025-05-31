import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "All Books", path: "/all-books" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="static"
      component={motion.div}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{
        background:
          "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "0 0 16px 16px",
        boxShadow: "0 4px 12px rgba(118, 75, 162, 0.3)",
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="/open-book.png"
              alt="Book Icon"
              className="w-10"
              style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.15))" }}
            />
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                letterSpacing: ".15rem",
                color: "white",
                textDecoration: "none",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                display: { xs: "none", md: "flex" },
                textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              BookBarn
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "12px",
                transition: "background-color 0.3s",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.35)" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                sx: {
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(118, 75, 162, 0.3)",
                },
              }}
            >
              {navLinks.map(({ label, path }) => (
                <MenuItem
                  key={path}
                  component={NavLink}
                  to={path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#764ba2",
                    fontWeight: 600,
                    textDecoration: "none",
                    "&.active": {
                      fontWeight: "bold",
                      color: "#667eea",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(102, 126, 234, 0.1)",
                    },
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: "12px",
                  paddingX: 2,
                  "&.active": {
                    fontWeight: 700,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 12px rgba(255,255,255,0.4)",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    boxShadow: "0 4px 10px rgba(255,255,255,0.3)",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Sign Up">
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "20px",
                  fontWeight: 600,
                  paddingX: 3,
                  textTransform: "none",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.25)",
                    borderColor: "white",
                    boxShadow: "0 0 12px rgba(255,255,255,0.6)",
                  },
                }}
              >
                <NavLink to='sign-up'>Sign Up</NavLink>
              </Button>
            </Tooltip>
            <Tooltip title="Login">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffd54f", // warm gold
                  color: "#4a3f35",
                  fontWeight: 700,
                  borderRadius: "20px",
                  paddingX: 3,
                  textTransform: "none",
                  boxShadow: "0 4px 10px rgba(255, 213, 79, 0.5)",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#ffca28",
                    boxShadow: "0 6px 14px rgba(255, 202, 40, 0.7)",
                  },
                }}
              >
                <NavLink to='login'>Login</NavLink>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
