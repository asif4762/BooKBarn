import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8156/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8156/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleExploreClick = () => {
    navigate("/all-books");
  };

  const bookSliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const reviewSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [{ breakpoint: 900, settings: { slidesToShow: 1 } }],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #dbeafe 0%, #ffffff 100%)",
        px: 4,
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Helmet>
        <title>BookBarn</title>
      </Helmet>

      <Box sx={{ maxWidth: 800, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            color: "#1565c0",
            mb: 2,
            textShadow: "1px 1px 5px rgba(21, 101, 192, 0.4)",
          }}
        >
          Welcome to <span style={{ color: "#1e88e5" }}>BookBarn</span>{" "}
          <Typewriter
            words={[
              "– your student buy and sell books!",
              "– buy books at a reasonable price!",
              "– discover great reads!",
              "- sell books in best price",
            ]}
            loop={true}
            cursor
          />
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Discover and exchange academic books with fellow students. Whether
          you're looking to save money or pass your books on to the next learner,
          BookBarn is your community-driven book hub.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#1876D1",
            paddingX: 5,
            paddingY: 1.5,
            fontWeight: "bold",
            borderRadius: "30px",
            boxShadow: "0 4px 15px rgba(24, 118, 209, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#155a9f",
              boxShadow: "0 6px 20px rgba(21, 90, 159, 0.6)",
            },
          }}
          onClick={handleExploreClick}
        >
          Explore Books
        </Button>
      </Box>

      <motion.img
        src="/open-book.png"
        alt="Books Illustration"
        loading="lazy"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{ width: "100%", maxWidth: 400, borderRadius: "1rem" }}
      />

      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: "#1565c0", fontWeight: 700, textAlign: "center" }}
        >
          Featured Books
        </Typography>

        <Slider {...bookSliderSettings}>
          {books.map((book, idx) => (
            <Box
              key={idx}
              sx={{
                px: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={book.image}
                alt={book.title}
                loading="lazy"
                sx={{
                  height: 300,
                  width: 200,
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 900, mt: 10 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, color: "#1565c0", fontWeight: 700, textAlign: "center" }}
        >
          What Students Say
        </Typography>

        {reviews.length === 0 ? (
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Loading reviews...
          </Typography>
        ) : (
          <Slider {...reviewSliderSettings}>
            {reviews.map(({ id, name, avatar, text, rating }) => (
              <Paper
                key={id}
                elevation={3}
                sx={{
                  p: 3,
                  mx: 2,
                  minHeight: 180,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  boxShadow: "0 4px 15px rgba(21, 101, 192, 0.4)",
                  borderRadius: 2,
                }}
              >
                <Avatar src={avatar} alt={name} sx={{ width: 64, height: 64 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {name}
                </Typography>
                <Rating value={rating} readOnly />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1, textAlign: "center" }}
                >
                  "{text}"
                </Typography>
              </Paper>
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
};

export default Home;
