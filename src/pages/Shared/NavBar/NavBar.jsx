import React, { useContext, useState } from "react";
import { LogOut, UserCircle, LayoutDashboard, ShoppingCart } from "lucide-react";
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
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast from "react-hot-toast";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { user, logOut } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleLogout = () => {
    handleCloseUserMenu();
    logOut()
      .then(() => {
        toast.success("You logged out successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error("Logout error:", err);
      });
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "All Books", path: "/all-books" },
    { label: "Add Books", path: "/add-books" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact", path: "/contact" },
  ];

  const userMenuItems = [
    { label: "Profile", path: "/dashboard/profile", icon: <UserCircle size={18} /> },
    { label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "My Cart", path: "/dashboard/cart", icon: <ShoppingCart size={18} /> },
  ];

  return (
    <AppBar
      position="sticky"
      component={motion.div}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      sx={{
        background: "rgba(250, 246, 255, 0.95)", // pastel light purple background
        backdropFilter: "blur(8px)",
        borderRadius: "0 0 28px 28px",
        boxShadow: "0 4px 18px rgba(139, 92, 246, 0.18)", // soft purple shadow
        py: 1,
        borderBottom: "1.5px solid rgba(139, 92, 246, 0.25)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "5%",
          right: "5%",
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
          opacity: 0.6,
          borderRadius: "6px",
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <motion.img
              src="/open-book.png"
              alt="BookBarn Logo"
              style={{ width: "42px", height: "42px" }}
              initial={{ scale: 0.5, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            />
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                letterSpacing: ".06rem",
                color: "rgba(75, 62, 140, 0.95)",
                textDecoration: "none",
                fontSize: { xs: "1.3rem", md: "1.75rem" },
                display: { xs: "none", md: "flex" },
                textShadow: "0 0 8px rgba(139, 92, 246, 0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "rgba(139, 92, 246, 1)",
                  textShadow: "0 0 14px rgba(139, 92, 246, 0.85)",
                },
              }}
            >
              BookBarn
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              onClick={handleOpenNavMenu}
              sx={{
                color: "rgba(75, 62, 140, 0.8)",
                backgroundColor: "rgba(200, 195, 250, 0.35)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(139, 92, 246, 0.35)",
                  color: "rgba(139, 92, 246, 1)",
                  transform: "rotate(10deg) scale(1.1)",
                },
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
                  mt: 1.5,
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.96)",
                  border: "1.5px solid rgba(139, 92, 246, 0.35)",
                  boxShadow: "0 10px 28px rgba(139, 92, 246, 0.16)",
                  minWidth: 230,
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
                    color: "rgba(75, 62, 140, 0.9)",
                    fontWeight: 600,
                    py: 1.75,
                    px: 3,
                    fontSize: "1rem",
                    transition: "all 0.25s ease-in-out",
                    borderRadius: "10px",
                    "&.active": {
                      fontWeight: "700",
                      color: "rgba(139, 92, 246, 1)",
                      background:
                        "linear-gradient(90deg, rgba(139, 92, 246, 0.15) 0%, transparent 100%)",
                      borderLeft: "4px solid rgba(139, 92, 246, 1)",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      color: "rgba(139, 92, 246, 1)",
                      transform: "translateX(7px)",
                    },
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: { md: 1.5, lg: 3 } }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "rgba(75, 62, 140, 0.85)",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: "14px",
                  px: 3,
                  py: 1.1,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "3px",
                    bottom: 6,
                    left: 0,
                    backgroundColor: "rgba(139, 92, 246, 0.85)",
                    borderRadius: "6px",
                    transition: "width 0.35s ease",
                  },
                  "&:hover": {
                    color: "rgba(139, 92, 246, 1)",
                    backgroundColor: "rgba(200, 195, 250, 0.4)",
                    "&::after": {
                      width: "100%",
                    },
                  },
                  "&.active": {
                    color: "rgba(139, 92, 246, 1)",
                    fontWeight: 700,
                    "&::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* User Profile Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user ? user.displayName : "Login to continue"}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  borderRadius: "16px",
                  backgroundColor: "rgba(230, 230, 250, 0.85)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(190, 180, 245, 1)",
                    boxShadow: "0 0 14px rgba(139, 92, 246, 0.7)",
                    transform: "scale(1.05)",
                  },
                }}
                aria-controls={Boolean(anchorElUser) ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElUser) ? "true" : undefined}
              >
                <Avatar
                  alt={user ? user.displayName : "User Avatar"}
                  src={user ? user.photoURL : ""}
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "16px",
                    boxShadow: "0 0 8px rgba(139, 92, 246, 0.5)",
                    bgcolor: "rgba(220, 215, 250, 0.8)",
                    color: "rgba(139, 92, 246, 0.8)",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    userSelect: "none",
                  }}
                >
                  {!user && <UserCircle size={28} />}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", borderRadius: "20px" }}
              id="user-menu"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                sx: {
                  borderRadius: "20px",
                  backgroundColor: "rgba(250, 246, 255, 0.98)",
                  border: "1.8px solid rgba(139, 92, 246, 0.35)",
                  boxShadow: "0 10px 28px rgba(139, 92, 246, 0.16)",
                  minWidth: 230,
                  py: 1,
                },
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {user ? (
                <>
                  {userMenuItems.map(({ label, path, icon }) => (
                    <MenuItem
                      key={path}
                      component={NavLink}
                      to={path}
                      onClick={handleCloseUserMenu}
                      sx={{
                        py: 1.25,
                        px: 3,
                        borderRadius: "14px",
                        color: "rgba(75, 62, 140, 0.9)",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          color: "rgba(139, 92, 246, 1)",
                        },
                        display: "flex",
                        alignItems: "center",
                        gap: 1.25,
                      }}
                    >
                      <ListItemIcon sx={{ color: "inherit", minWidth: 30 }}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText>{label}</ListItemText>
                    </MenuItem>
                  ))}
                  <MenuItem
                    onClick={handleLogout}
                    sx={{
                      py: 1.25,
                      px: 3,
                      borderRadius: "14px",
                      color: "rgba(180, 40, 40, 0.9)",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "rgba(230, 50, 50, 0.15)",
                        color: "rgba(230, 40, 40, 1)",
                      },
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25,
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit", minWidth: 30 }}>
                      <LogOut size={18} />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </MenuItem>
                </>
              ) : (
                <MenuItem
                  component={NavLink}
                  to="/login"
                  onClick={handleCloseUserMenu}
                  sx={{
                    py: 1.25,
                    px: 3,
                    borderRadius: "14px",
                    color: "rgba(75, 62, 140, 0.9)",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      color: "rgba(139, 92, 246, 1)",
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: 1.25,
                  }}
                >
                  <UserCircle size={18} />
                  Login
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
