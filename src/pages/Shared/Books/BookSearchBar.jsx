import React from "react";
import { InputBase, Paper, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

const BookSearchBar = ({ searchQuery, setSearchQuery }) => {
  // Prevent form reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 4,
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit} // ✅ This prevents the reload
        elevation={4}
        sx={{
          p: "4px 8px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 500,
          borderRadius: "30px",
          backgroundColor: "#f9f9f9",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, fontSize: "1rem" }}
          placeholder="Search by title, author, course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          inputProps={{ "aria-label": "search books" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default BookSearchBar;
