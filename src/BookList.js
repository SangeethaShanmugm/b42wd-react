import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Book } from "./Book";

export function BookList({ bookList, setBookList }) {
  // const bookList = INITIAL_BOOK_LIST;
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div>
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
        <Button
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            // {/* //copy the bookList and add newBook to it */}
            setBookList([...bookList, newBook]);
          }}
        >
          Add Book
        </Button>
      </div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
