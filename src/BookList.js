import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Book } from "./Book";
import { API } from "./global";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([]);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  // useEffect(() => {
  //   fetch(`${API}/books`, {
  //     method: "GET",
  //   })
  //     .then((data) => data.json())
  //     .then((bks) => setBookList(bks));
  // }, []);

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bks) => setBookList(bks));
  };

  useEffect(() => getBooks(), []);
  const navigate = useNavigate();

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              //Deleting -> refresh data
              <IconButton
                color="error"
                onClick={() => {
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
              >
                <DeleteIcon />
              </IconButton>

              // <IconButton
              //   aria-label="delete"
              //   color="secondary"
              //   onClick={() => {
              //     let copyBookList = [...bookList];
              //     let removedBook = copyBookList.splice(index, 1);
              //     setBookList(copyBookList)
              //   }}
              // >
              //   <DeleteIcon />
              // </IconButton>
            }
            editButton={
              <IconButton
                color="secondary"
                onClick={() => navigate(`/book/edit/${bk.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

//Edit Book --> PUT method
// BookDetail + AddBook
