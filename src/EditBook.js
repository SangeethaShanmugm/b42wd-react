import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";

export function EditBook() {
  const [book, setBook] = useState(null);
  const { bookid } = useParams();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bk) => setBook(bk));
  }, []);

  return book ? <EditBookForm book={book} /> : "Loading...";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);

  const navigate = useNavigate();

  return (
    <div className="add-book-form">
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={poster}
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //1. method - PUT ✅
          //2 . body  -data  - JSON - JSON.stringify ✅
          //3.  headers - JSON
          fetch(`${API}/books/${book.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/book"));
          //Currently post and navigate is immediate
          //When post is complete - navigate - /book

          // {/* //copy the bookList and add newBook to it */}
          // setBookList([...bookList, newBook]);
          // navigate("/book");
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
