import React from "react";

const Commentlist = ({comments}) => (
  <ul>
    {comments.map(({ body, author }) =>
      <li key={body}><b>{author}</b><blockquote>{body}</blockquote></li>
    )}
  </ul>
)

export default Commentlist