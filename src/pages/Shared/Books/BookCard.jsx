import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BookCard = ({ book }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
      className="bg-white"
    >
      <Box
        sx={{
          height: 200,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
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
      <CardContent sx={{ padding: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            mb: 1,
            color: "#333",
          }}
        >
          {book.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray.700", mb: 0.5 }}>
          <strong>Author:</strong> {book.author}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray.700", mb: 0.5 }}>
          <strong>Course:</strong> {book.course}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray.700" }}>
          <strong>Condition:</strong>{" "}
          {book.condition.charAt(0).toUpperCase() + book.condition.slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
