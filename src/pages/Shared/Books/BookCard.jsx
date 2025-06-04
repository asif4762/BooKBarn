import * as React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, onAddToCart }) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleAddCart = () => {
    if(user){
      toast.success('Book added to cart successfully')
      console.log(book,user.email)
    }
    else{
      toast.error('Please login first')
      navigate('/login')
    }
  }
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          width: 300,
          height: 500,
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
            height: "100%",
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
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BookCard;
