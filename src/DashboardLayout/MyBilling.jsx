import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";
import toast from "react-hot-toast";

export default function Billings() {
  const { user } = useContext(AuthContext);
  const [billings, setBillings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axios
      .get(`http://localhost:8157/billings?email=${encodeURIComponent(user.email)}`)
      .then((res) => {
        setBillings(res.data);
      })
      .catch(() => {
        toast.error("Failed to load billing history");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  if (loading) return <Typography>Loading billing history...</Typography>;

  if (billings.length === 0)
    return (
      <Typography textAlign="center" mt={4} color="text.secondary">
        No billing records found.
      </Typography>
    );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3} fontWeight="bold" color="#1976d2">
        My Purchases
      </Typography>
      <Stack spacing={2}>
        {billings.map((bill) => (
          <Paper key={bill._id} sx={{ p: 2, borderRadius: 2 }}>
            <Typography fontWeight="bold">{bill.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {bill.author}
            </Typography>
            <Typography>
              Price: ৳{bill.price.toFixed(2)} × {bill.count || 1}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Purchased on: {new Date(bill.purchasedAt).toLocaleString()}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
