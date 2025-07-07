import * as React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookCard = ({ book, onAddToCart, onDelete }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (!user?.email) {
      setAdmin(false);
      return;
    }

    const userRole = async () => {
      try {
        const res = await axios.get(`http://localhost:8157/users/${user.email}`);
        setAdmin(res.data?.role === "admin");
      } catch (err) {
        console.error("Error fetching role:", err);
        setAdmin(false);
      }
    };

    userRole();
  }, [user?.email]);

  const handleAddCart = async () => {
    if (!user) {
      toast.error("Please login first to add items to your cart.");
      navigate("/login");
      return;
    }

    try {
      const data = {
        email: user.email,
        _id: book._id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
        count: 1,
      };

      const response = await axios.post("http://localhost:8157/carts", data);
      console.log("Cart response:", response.data);

      if (
        response.status === 200 ||
        response.data?.acknowledged ||
        response.data?.insertedId
      ) {
        toast.success("Added to cart!");
        if (onAddToCart) onAddToCart(book);
      } else {
        toast.error("Server responded, but item may not have been added.");
      }
    } catch (err) {
      console.error("Error adding to cart:", err?.response || err);
      toast.error(
        err?.response?.data?.message || "Failed to add to cart. Please try again."
      );
    }
  };

  const handleDeleteBook = async () => {
    try {
      toast.success("Book Deleted Successfully!");
      if (onDelete) onDelete(book._id);
    } catch (err) {
      console.error("Error deleting book:", err);
      toast.error("Failed to delete book.");
    }
  };

  const colors = {
    primaryMain: "#1e88e5",
    primaryLight: "#42a5f5",
    backgroundPaper: "#1e1e1e",
    backgroundDefault: "#121212",
    textPrimary: "#e0e0e0",
    textSecondary: "#a0a0a0",
    textDisabled: "#555555",
    errorMain: "#e53935",
    errorDark: "#ab000d",
    successMain: "#43a047",
    divider: "#2a2a2a",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: `0 15px 40px ${colors.primaryMain}77, 0 0 25px ${colors.primaryLight}22`,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      style={{ borderRadius: 12 }}
    >
      <Card
        sx={{
          width: 300,
          borderRadius: 12,
          overflow: "hidden",
          backgroundColor: colors.backgroundPaper,
          boxShadow:
            "0 12px 25px rgba(0, 0, 0, 0.6), inset 0 0 10px rgba(30,144,255,0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: colors.textPrimary,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Box
          sx={{
            height: 200,
            overflow: "hidden",
            background: `linear-gradient(135deg, ${colors.backgroundDefault}, #0e0e0e)`,
            borderBottom: `1px solid ${colors.divider}`,
          }}
        >
          <CardMedia
            component="img"
            image={book.image}
            alt={book.title}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              border: `1px solid ${colors.divider}`,
              borderRadius: 2,
              transition: "transform 0.4s ease-in-out",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          />
        </Box>

        <CardContent
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              lineHeight: 1.3,
              color: colors.textPrimary,
              height: "3.2rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textShadow: `0 0 5px ${colors.primaryLight}22`,
            }}
          >
            {book.title}
          </Typography>

          <Typography variant="body2" sx={{ color: colors.textSecondary }}>
            <Box component="strong" sx={{ color: colors.primaryLight }}>
              Author:
            </Box>{" "}
            {book.author}
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textSecondary }}>
            <Box component="strong" sx={{ color: colors.primaryLight }}>
              Course:
            </Box>{" "}
            {book.course}
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textSecondary }}>
            <Box component="strong" sx={{ color: colors.primaryLight }}>
              Condition:
            </Box>{" "}
            {book.condition.charAt(0).toUpperCase() + book.condition.slice(1)}
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textDisabled }}>
            <strong>Seller:</strong> {book.sellerName}
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textDisabled }}>
            <strong>Location:</strong> {book.location}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: colors.successMain, fontWeight: 700, mt: 1.5 }}
          >
            ৳{book.price}
          </Typography>

          <Box mt={3}>
            {isAdmin ? (
              <Button
                variant="contained"
                fullWidth
                startIcon={<DeleteIcon />}
                sx={{
                  backgroundColor: colors.errorMain,
                  "&:hover": {
                    backgroundColor: colors.errorDark,
                  },
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  py: 1.2,
                }}
                onClick={handleDeleteBook}
              >
                Delete Book
              </Button>
            ) : (
              <Button
                variant="contained"
                fullWidth
                startIcon={<ShoppingCartIcon />}
                sx={{
                  backgroundColor: colors.primaryMain,
                  "&:hover": {
                    backgroundColor: colors.primaryLight,
                  },
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  py: 1.2,
                }}
                onClick={handleAddCart}
              >
                Add to Cart
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BookCard;
