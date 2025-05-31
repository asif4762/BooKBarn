import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        bgcolor: "#f9fafb",
        color: "text.primary",
        minHeight: "70vh",
      }}
    >
      <Helmet><title>BookBarn | Contact</title></Helmet>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            color="primary.main"
            gutterBottom
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={600}
            mx="auto"
          >
            We'd love to hear from you. Whether you have a question, feedback, or
            just want to say hello — our inbox is always open.
          </Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="start"
        >
          {/* Contact Form */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              required
              label="Name"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <TextField
              required
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 1, fontWeight: "bold" }}
            >
              Send Message
            </Button>
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary.main"
              gutterBottom
            >
              Contact Information
            </Typography>

            <Typography variant="body1">
              <strong>Email:</strong> support@bookbarn.com
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> 01670415337
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> East Delta University
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={3}>
              <Link
                href="#"
                underline="hover"
                color="primary"
                sx={{ fontWeight: "medium" }}
              >
                Facebook
              </Link>
              <Link
                href="#"
                underline="hover"
                color="primary"
                sx={{ fontWeight: "medium" }}
              >
                Instagram
              </Link>
              <Link
                href="#"
                underline="hover"
                color="primary"
                sx={{ fontWeight: "medium" }}
              >
                Twitter
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
