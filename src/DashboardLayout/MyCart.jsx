import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";
import toast from "react-hot-toast";

export default function MyCart() {
  const theme = useTheme();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingItemId, setRemovingItemId] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axios
      .get(`http://localhost:8157/carts?email=${user.email}`)
      .then((res) => {
        setCartItems(
          res.data.map((item) => ({
            ...item,
            id: item._id,
            quantity: item.count || 1,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load cart");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) => {
      const updatedItems = prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            if (newQuantity <= 0) {
              removeItem(id);
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean);

      const updatedItem = updatedItems.find((item) => item.id === id);
      if (updatedItem) {
        axios
          .put(`http://localhost:8157/carts/${id}?email=${user.email}`, {
            count: updatedItem.quantity,
          })
          .catch(() => toast.error("Failed to update quantity"));
      }
      return updatedItems;
    });
  };

  const removeItem = (id) => {
    setRemovingItemId(id);
    axios
      .delete(`http://localhost:8157/carts/${id}?email=${user.email}`)
      .then(() => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch(() => toast.error("Failed to remove item"))
      .finally(() => setRemovingItemId(null));
  };

  const handleCheckout = async () => {
    setProcessing(true);
    try {
      const res = await axios.post("http://localhost:8157/initiate-payment", {
        email: user.email,
        items: cartItems,
      });
      if (res.data?.GatewayPageURL) {
        window.location.replace(res.data.GatewayPageURL);
      } else {
        toast.error("Payment gateway URL not found");
      }
    } catch (err) {
      toast.error("Payment initiation failed");
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (loading) return <Typography>Loading cart...</Typography>;

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
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Stack spacing={3}>
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ width: 90, height: 120, objectFit: "cover", borderRadius: 1 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    by {item.author}
                  </Typography>
                  <Typography color="#1976d2">৳{item.price.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={removingItemId === item.id}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton
                    onClick={() => updateQuantity(item.id, +1)}
                    disabled={removingItemId === item.id}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <IconButton onClick={() => removeItem(item.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <Typography fontWeight="bold">Total:</Typography>
              <Typography fontWeight="bold" color="#1976d2">
                ৳{total.toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              disabled={processing}
            >
              {processing ? "Redirecting..." : "Proceed to Checkout"}
            </Button>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}
