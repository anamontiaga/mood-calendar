import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.scss";

const Home = props => {
  return (
    <div className="main__content">
      <button className="main__button">
        <Link to="/editor" className="main__button--link">
          +
        </Link>
      </button>
      <div className="face--container">
        <div className="face_smile">:)</div>
        <div className="face_sad">:(</div>
        <div className="face_smile">:)</div>
      </div>
    </div>
  );
};

export default Home;
