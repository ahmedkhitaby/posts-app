import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import "./card.css";
const Card = ({ userid, id, title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3 className="card-writer">
        Written by: <span>User-{userid}</span>
      </h3>
      <Link className="card-btn" to={`/posts/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default Card;
Card.propTypes = {
  userid: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
};
