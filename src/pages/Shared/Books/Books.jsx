import React, { useEffect, useState } from "react";
import BookSearchBar from "./BookSearchBar";
import BookCard from "./BookCard";
// import books from "../../../../public/book_data_large.json";
import { Grid, Container, Pagination, Box } from "@mui/material";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;
  const [books,setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8156/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.course}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container sx={{ py: 4 }}>
      <BookSearchBar
        searchQuery={searchQuery}
        setSearchQuery={(query) => {
          setSearchQuery(query);
          setCurrentPage(1); 
        }}
      />

      <Grid container spacing={3} justifyContent="center">
        {currentBooks.map((book, idx) => (
          <Grid item key={idx}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            size="large"
          />
        </Box>
      )}
    </Container>
  );
};

export default Books;
