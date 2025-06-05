import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";

export default function MyCart() {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [removingItemId, setRemovingItemId] = useState(null);

  // Fetch cart items for current user
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:8156/carts?email=${encodeURIComponent(user.email)}`)
      .then((res) => {
        setCartItems(
          res.data.map((item) => ({
            ...item,
            id: item._id, // Use backend _id as unique id
            quantity: item.count || 1,
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load cart");
        setLoading(false);
        console.error(err);
      });
  }, [user?.email]);

  // Remove item locally and on backend
  const removeItem = (id) => {
    setRemovingItemId(id);

   axios.delete(`http://localhost:8156/carts/${id}?email=${encodeURIComponent(user.email)}`)
      .then(() => {
        setCartItems((items) => items.filter((item) => item.id !== id));
        setRemovingItemId(null);
      })
      .catch((err) => {
        console.error("Failed to remove item", err);
        setRemovingItemId(null);
      });
  };

  // Update quantity locally and on backend
  const updateQuantity = (id, delta) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity <= 0) {
            // Remove item if quantity drops to 0 or below
            removeItem(id);
            return null; // filter out later
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter(Boolean); // remove nulls

    setCartItems(updatedItems);

    const updatedItem = updatedItems.find((item) => item.id === id);

    if (updatedItem) {
      axios
        .put(`http://localhost:8156/carts/${id}`, {
          count: updatedItem.quantity,
        })
        .catch((err) => console.error("Failed to update quantity", err));
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (loading) return <Typography>Loading cart...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3} fontWeight="bold" color="#1976d2">
        My Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Your cart is empty 😢
        </Typography>
      ) : (
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: "#fff",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          }}
        >
          <Stack spacing={3}>
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  opacity: removingItemId === item.id ? 0 : 1,
                  transform:
                    removingItemId === item.id
                      ? "translateX(100%)"
                      : "translateX(0)",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 90,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                />

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    by {item.author}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="#1976d2">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "#f0f4ff",
                    borderRadius: 2,
                    px: 1,
                    py: 0.5,
                  }}
                >
                  <IconButton
                    size="small"
                    color="primary"
                    disabled={removingItemId === item.id}
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      minWidth: 24,
                      textAlign: "center",
                      fontWeight: "bold",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    color="primary"
                    disabled={removingItemId === item.id}
                    onClick={() => updateQuantity(item.id, +1)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>

                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => removeItem(item.id)}
                  sx={{ ml: 2 }}
                  disabled={removingItemId === item.id}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}

            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Total:
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="#1976d2">
                ${total.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontWeight: "bold" }}
              onClick={() => alert("Proceed to checkout")}
            >
              Proceed to Checkout
            </Button>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}
