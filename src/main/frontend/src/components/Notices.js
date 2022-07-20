import { Link } from "react-router-dom";
import { useState } from "react";

function Notices() {
  const [number, setNumber] = useState(1);
  const [title, setTitle] = useState("title");
  const [author, setAuthor] = useState("author");
  const [recommend, setRecommend] = useState(0);
  const date = new Date();
  const dateStr = date.toLocaleString();
  return (
    <tr>
      <td className="col-1 text-center" id="number">
        {number}
      </td>
      <td className="col-5 ">
        <Link
          className="text-decoration-none text-reset"
          id="title"
          to={`/notice/detail/${number}`}
        >
          {title}
        </Link>
      </td>
      <td className="col-2 text-center" id="author">
        {author}
      </td>
      <td className="col-2 text-center" id="board_date">
        {dateStr}
      </td>
      <td className="col-2 text-center" id="recommend">
        {recommend}
      </td>
    </tr>
  );
}

export default Notices;
