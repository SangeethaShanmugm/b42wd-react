import { useParams } from "react-router-dom";

export function BookDetail({ bookList }) {
  const { bookid } = useParams();
  // console.log(bookList);
  const book = bookList[bookid];
  return <div>Book Detail Page of {book.name}</div>;
}
