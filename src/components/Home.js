import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.scss";

const Home = props => {
  const { faces } = props;

  return (
    <div className="main__content">
      <button className="main__button">
        <Link to="/editor" className="main__button--link">
          +
        </Link>
      </button>

      <ul className="face--container">
        {faces.map((face, index) => {
          const faceClass = face === ":)" ? "face_smile" : "face_sad";
          return (
            <li className={faceClass} key={index}>
              {face}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
