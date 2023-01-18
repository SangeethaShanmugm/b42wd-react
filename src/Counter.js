import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* like button */}
      {/* camelcase - onClick */}
      <IconButton
        aria-label="like-btn"
        onClick={() => setLike(like + 1)}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      {/* dislike button */}
      <IconButton
        aria-label="dislike-btn"
        onClick={() => setDislike(dislike + 1)}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button> */}
      {/* <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
    </div>
  );
}
