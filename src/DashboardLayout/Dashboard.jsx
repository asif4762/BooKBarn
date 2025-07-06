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
  useTheme,
  ButtonBase,
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
  const theme = useTheme();
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("You logged out successfully"))
      .catch((err) => {
        toast.error("Something went wrong");
        console.error("Logout error:", err);
      });
  };

  const blue = "#1976d2";
  const blueLight = "#2196f3";

  return (
    <Box sx={{ width: 240 }}>
      <Paper
        elevation={3}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
          bgcolor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
        }}
      >
        {/* Top */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: blue,
              textAlign: "center",
              textShadow: `0 0 6px ${blueLight}99`,
            }}
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
                <NavLink key={label} to={path} style={{ textDecoration: "none" }}>
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: isActive ? `${blue}22` : "transparent",
                      color: isActive ? blue : theme.palette.text.primary,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: `${blueLight}22`,
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? blue : theme.palette.text.secondary,
                      }}
                    >
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
            component={ButtonBase}
            onClick={handleLogout}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              color: theme.palette.text.primary,
              "&:hover": {
                bgcolor: "#ffebee",
                color: "#d32f2f",
                transform: "scale(1.03)",
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.text.secondary }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
