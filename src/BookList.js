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
  const [trailer, setTrailer] = useState("");
  return (
    <div>
     
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
