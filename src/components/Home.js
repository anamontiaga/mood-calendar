import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.scss";

const Home = props => {
  const { faces } = props;
  const faceClass = faces === ":)" ? "face_smile" : "face_sad";
  return (
    <div className="main__content">
      <button className="main__button">
        <Link to="/editor" className="main__button--link">
          +
        </Link>
      </button>

      <ul className="face--container">
        {faces.map((face, index) => {
          return (
            <li className={faceClass} key={index}>
              {face}
            </li>
          );
        })}

        {/* <div className="face_smile">:)</div>
        <div className="face_sad">:(</div>
        <div className="face_smile">:)</div> */}
      </ul>
    </div>
  );
};

export default Home;
