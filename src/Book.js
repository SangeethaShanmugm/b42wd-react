import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { API } from "./global";
import DeleteIcon from "@mui/icons-material/Delete";

export function Book({ book, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  //conditional Styling
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };

  //true - visible
  //false - hide
  // !true - false
  // !false - true
  // const summaryStyle = {
  //   display: show ? "block" : "none",
  // };
  const navigate = useNavigate();
  // const [bookList, setBookList] = useState([]);
  // const getBooks = () => {
  //   fetch(`${API}/books`, {
  //     method: "GET",
  //   })
  //     .then((data) => data.json())
  //     .then((bks) => setBookList(bks));
  // };

  // useEffect(() => getBooks(), []);

  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>
      <IconButton
        aria-label="toggle-description"
        onClick={() => setShow(!show)}
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton
        aria-label="info"
        onClick={() => navigate("/book/" + id)}
        color="primary"
      >
        <InfoIcon />
      </IconButton>
      {/* <p style={summaryStyle} className="book-summary">
              {book.summary}
            </p> */}
      {/* conditional rendering */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <Counter />
      {deleteButton} {editButton}
      {/* <IconButton
        color="error"
        onClick={() => {
          fetch(`${API}/books/${id}`, {
            method: "DELETE",
          }).then(() => getBooks());
        }}
      >
        <DeleteIcon />
      </IconButton> */}
    </div>
  );
}
