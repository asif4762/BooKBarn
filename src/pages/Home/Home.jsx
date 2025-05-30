import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/all-books");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">BookBarn</span>
        </h1>
        <p className="text-lg text-gray-700">
          Discover and exchange academic books with fellow students.
          Whether you're looking to save money or pass your books on to the next learner, BookBarn is your community-driven book hub.
        </p>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#1876D1",
            paddingX: 4,
            paddingY: 1.5,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#155a9f",
            },
          }}
          onClick={handleExploreClick}
        >
          Explore Books
        </Button>

        <div className="mt-8 flex justify-center">
          <img
            src="/book-hero.png" 
            alt="Books Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
