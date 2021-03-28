import { useParams } from "react-router";
import FetchData from "../../services/FetchData";
import "./CardDetails.css";
const CardDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = FetchData(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return (
    <div className="card-details ">
      {isPending && <div> loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="card-title">{blog.title}</h2>
          <p className="card-writer">written by: user-{blog.userId}</p>
          <div className="card-body">{blog.body}</div>
        </article>
      )}
    </div>
  );
};
export default CardDetails;
