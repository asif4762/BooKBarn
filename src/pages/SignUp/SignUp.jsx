import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Radius } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`Signing up ${formData.name} with ${formData.email}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: "96px", // to avoid Navbar overlap if fixed
        background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        py: 6,
       borderRadius: 3,
      }}
    >
      <Helmet>
        <title>BookBarn | Sign Up</title>
      </Helmet>

      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "rgba(255,255,255,0.85)",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(118, 75, 162, 0.3)",
          backdropFilter: "blur(12px)",
          p: 5,
          fontFamily: "'Poppins', sans-serif",
          color: "#4a3f35",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color="#764ba2"
          mb={4}
          textAlign="center"
          sx={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
        >
          Create a BookBarn Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoComplete="name"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoComplete="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoComplete="new-password"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoComplete="new-password"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: "20px",
              background:
                "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 4px 12px rgba(118, 75, 162, 0.6)",
              color: "white",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                boxShadow: "0 6px 16px rgba(118, 75, 162, 0.8)",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={3}
          textAlign="center"
        >
          Already have an account?{" "}
          <Link
            href="/login"
            underline="hover"
            sx={{ fontWeight: 600, color: "#764ba2" }}
          >
            Login
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default SignUp;
