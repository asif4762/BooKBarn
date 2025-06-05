import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import toast from "react-hot-toast";

const navItems = [
  { label: "Home", icon: <HomeIcon />, path: "/" },
  { label: "My Cart", icon: <ShoppingCartIcon />, path: "/dashboard/cart" },
  { label: "My Billings", icon: <ReceiptIcon />, path: "/dashboard/billings" },
];

export default function SidebarDashboard() {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("You logged out successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error("Logout error:", err);
      });
  };

  return (
    <Box sx={{ width: 240 }}>
      {/* Sidebar */}
      <Paper
        elevation={3}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "#fff",
          borderRight: "1px solid #ddd",
        }}
      >
        {/* Top Menu */}
        <Box>
          <Typography
            variant="h6"
            sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
          >
            Dashboard
          </Typography>

          <List>
            {navItems.map(({ label, icon, path }) => {
              const isActive =
                path === "/dashboard/cart"
                  ? currentPath === "/dashboard" || currentPath === "/dashboard/cart"
                  : currentPath === path;

              return (
                <NavLink
                  key={label}
                  to={path}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: isActive ? "#e3f2fd" : "transparent",
                      color: isActive ? "#1976d2" : "#333",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "#e3f2fd",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: isActive ? "#1976d2" : "#666" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? "bold" : "normal",
                      }}
                    />
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
        </Box>

        {/* Logout */}
        <List>
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              bgcolor: "transparent",
              color: "#333",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#ffebee",
                color: "#d32f2f",
                transform: "scale(1.03)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#666" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                fontWeight: "normal",
              }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
