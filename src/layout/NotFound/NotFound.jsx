import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found ">
      <h2 className="">Sorry!</h2>
      <p>That page Cannot be found</p>
      <Link to="/">Back to the homepage....</Link>
    </div>
  );
};

export default NotFound;
