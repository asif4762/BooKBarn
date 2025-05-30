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

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "ALL BOOKS", path: "/all-books" },
    { label: "ABOUT US", path: "/about-us" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0, mr: 2 }}>
            <img src="/open-book.png" alt="Book Icon" className="w-10" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                display: { xs: "none", md: "flex" },
              }}
            >
              BookBarn
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-start" }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navLinks.map(({ label, path }) => (
                <MenuItem
                  key={path}
                  component={NavLink}
                  to={path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                    "&.active": {
                      fontWeight: "bold",
                      color: "#1976d2",
                    },
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                  "&.active": {
                    fontWeight: "bold",
                    borderBottom: "2px solid white",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box className="flex space-x-2">
            <Tooltip title="Sign Up">
              <Button variant="outlined" className="text-white" color="inherit">
                Sign up
              </Button>
            </Tooltip>
            <Tooltip title="Login">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "#1876D1",
                  borderColor: "#1876D1",
                  "&:hover": {
                    backgroundColor: "#e6f0ff",
                    borderColor: "#1876D1",
                  },
                }}
              >
                Login
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
