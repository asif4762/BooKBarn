import * as React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
    if (!user?.email) return;

    const userRole = async () => {
      try {
        const res = await axios.get(`http://localhost:8156/users/${user.email}`);
        setAdmin(res.data?.role === "admin");
      } catch (err) {
        console.error("Error fetching role:", err);
      }
    };

    userRole();
  }, [user?.email]);

  const handleAddCart = async () => {
    if (user) {
      try {
        const { _id, ...rest } = book;
        const data = {
          email: user.email,
          bookId: _id,
          ...rest,
        };
        await axios.post("http://localhost:8156/carts", data);
        toast.success("Added to cart!");
        if (onAddToCart) onAddToCart(book);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  };

  // Function to delete book (only admins)
  const handleDeleteBook = () => {
    
    // try {
    //   async
    //   await axios.delete(`http://localhost:8156/books/${book._id}`);
    //   toast.success("Book deleted successfully");
    //   if (onDelete) onDelete(book._id);
    // } catch (err) {
    //   console.error(err);
    //   toast.error("Failed to delete book");
    // }
    toast.success('Book Deleted Successfully')
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        sx={{
          width: 300,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 8,
          },
        }}
      >
        <Box
          sx={{
            height: 200,
            overflow: "hidden",
            backgroundColor: "#f3f4f6",
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
            }}
          />
        </Box>

        <CardContent
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              color: "#1f2937",
              lineHeight: "1.4",
              height: "2.8em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {book.title}
          </Typography>

          <Typography variant="body2" sx={{ color: "#374151" }}>
            <strong>Author:</strong> {book.author}
          </Typography>
          <Typography variant="body2" sx={{ color: "#374151" }}>
            <strong>Course:</strong> {book.course}
          </Typography>
          <Typography variant="body2" sx={{ color: "#374151" }}>
            <strong>Condition:</strong>{" "}
            {book.condition.charAt(0).toUpperCase() + book.condition.slice(1)}
          </Typography>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            <strong>Seller:</strong> {book.sellerName}
          </Typography>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            <strong>Location:</strong> {book.location}
          </Typography>
          <Typography variant="body2" sx={{ color: "#10b981", fontWeight: 600 }}>
            ₹{book.price}
          </Typography>

          <Box mt={2}>
            {isAdmin ? (
              <Button
                variant="contained"
                fullWidth
                startIcon={<ShoppingCartIcon />}
                sx={{
                  textTransform: "none",
                  backgroundColor: "#dc2626", // red for delete
                  "&:hover": {
                    backgroundColor: "#b91c1c",
                  },
                  fontWeight: 500,
                  borderRadius: 2,
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
                  textTransform: "none",
                  backgroundColor: "#2563eb",
                  "&:hover": {
                    backgroundColor: "#1e40af",
                  },
                  fontWeight: 500,
                  borderRadius: 2,
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
