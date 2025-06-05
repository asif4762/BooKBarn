import React, { useState } from "react";
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
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await axios.post("http://localhost:8156/contact", formData);
      setFeedback({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setFeedback({ type: "error", message: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 6 }, bgcolor: "#f9fafb", color: "text.primary", minHeight: "70vh" }}>
      <Helmet><title>BookBarn | Contact</title></Helmet>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" component="h2" fontWeight="bold" color="primary.main" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello — our inbox is always open.
          </Typography>
        </Box>

        <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={6} alignItems="start">
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ bgcolor: "background.paper", p: 4, borderRadius: 3, boxShadow: 3, display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField required label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
            <TextField required label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
            <TextField required label="Message" name="message" multiline rows={5} value={formData.message} onChange={handleChange} fullWidth />
            {feedback && (
              <Typography color={feedback.type === "error" ? "error" : "primary"}>{feedback.message}</Typography>
            )}
            <Button type="submit" variant="contained" size="large" disabled={loading} sx={{ mt: 1, fontWeight: "bold" }}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>

          <Box sx={{ bgcolor: "background.paper", p: 4, borderRadius: 3, boxShadow: 3, display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1"><strong>Email:</strong> support@bookbarn.com</Typography>
            <Typography variant="body1"><strong>Phone:</strong> 01670415337</Typography>
            <Typography variant="body1"><strong>Address:</strong> East Delta University</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" fontWeight="medium" gutterBottom>Follow Us</Typography>
            <Stack direction="row" spacing={3}>
              <Link href="#" underline="hover" color="primary" sx={{ fontWeight: "medium" }}>Facebook</Link>
              <Link href="#" underline="hover" color="primary" sx={{ fontWeight: "medium" }}>Instagram</Link>
              <Link href="#" underline="hover" color="primary" sx={{ fontWeight: "medium" }}>Twitter</Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
