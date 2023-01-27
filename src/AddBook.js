import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

//Validation
//name - required
//poster - min 4, required
//rating- 0-10, required
//summary- min 20 chars, required
//trailer - min 4, required

const bookValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name?😉"),
  poster: yup
    .string()
    .min(4, "Need a longer poster😉")
    .required("Why not fill this poster?😉"),
  rating: yup
    .number()
    .min(1, "Need a longer rating 😉")
    .max(10, "Too much rating 😉")
    .required("Why not fill this rating?😉"),
  summary: yup
    .string()
    .min(20, "Need a longer summary")
    .max(100, "Too much summary")
    .required("Why not fill this summary?😉"),
  trailer: yup
    .string()
    .min(4, "Need a longer trailer")
    .required("Why not fill this trailer?😉"),
});

export function AddBook() {
  // const [bookList, setBookList] = useState([]);
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: (newBook) => {
      console.log("onSubmit", newBook);
      createBook(newBook);
    },
  });

  const navigate = useNavigate();

  const createBook = (newBook) => {
    //1. method - POST ✅
    //2 . body  -data  - JSON - JSON.stringify ✅
    //3.  headers - JSON
    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/book"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="add-book-form">
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />

      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

      <TextField
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
      />

      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}

      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
      />

      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}

      <TextField
        id="summary"
        name="summary"
        label="Summary"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
      />

      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}

      <TextField
        id="trailer"
        name="trailer"
        label="Trailer"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
      />

      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}

      <Button variant="contained" onClick={createBook} type="submit">
        Add Book
      </Button>
    </form>
  );
}

//Task - 20 mins
//Apply formik and validation -yup for the AddBook component
