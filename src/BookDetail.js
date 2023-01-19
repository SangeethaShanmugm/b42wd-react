import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function BookDetail({ bookList }) {
  const { bookid } = useParams();
  // console.log(bookList);
  const book = bookList[bookid];

  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="Charlotte's Web (3/10) Movie CLIP - Wilbur Meets Charlotte (2006) HD"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>

        <p className="book-summary">{book.summary}</p>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
