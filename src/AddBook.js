import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//Task - 20 mins
// /book/add  - AddBook
// AddBook ->  book added -> /book(BookList page)
export function AddBook({ bookList, setBookList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();
  return (
    <div className="add-book-form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)} />
      <Button
        variant="contained"
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          // {/* //copy the bookList and add newBook to it */}
          setBookList([...bookList, newBook]);
          navigate("/book");
        }}
      >
        Add Book
      </Button>
    </div>
  );
}
