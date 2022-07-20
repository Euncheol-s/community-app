import { Link } from "react-router-dom";

function Notices() {
  return (
    <tr>
      <td className="col-1 text-center" id="number">
        1
      </td>
      <td className="col-5 ">
        <Link className="text-decoration-none text-reset" id="title">
          title
        </Link>
      </td>
      <td className="col-2 text-center" id="author">
        author
      </td>
      <td className="col-2 text-center" id="board_date">
        date
      </td>
      <td className="col-2 text-center" id="recommend">
        recommend
      </td>
    </tr>
  );
}

export default Notices;
