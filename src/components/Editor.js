import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Editor.scss";

const Editor = props => {
  const { getDate, getMood, getMessage } = props;
  return (
    <div className="editor">
      <div className="editor__date">
        <label className="editor__date--label" htmlFor="date">
          Date
        </label>
        <input className="js-date editor__date--input" id="date" type="date" name="date" placeholder="21/4/2018" onChange={getDate} />
      </div>
      <div className="editor__mood">
        <label className="editor__mood--label" htmlFor="mood">
          Mood
        </label>
        <div className="editor__mood--inputs">
          <input className="editor__mood--inputs--smile" type="checkbox" name=":)" value="happy" onChange={getMood} /> :)
          <br />
          <input className="editor__mood--inputs--sad" type="checkbox" name=":(" value="sad" onChange={getMood} /> :(
          <br />
        </div>
      </div>
      <div className="editor__message">
        <label className="editor__message--label" htmlFor="message">
          Message
        </label>
        <input className="js-date editor__message--input" id="message" type="message" name="message" placeholder="¿Por qué es un buen día?" onChange={getMessage} />
      </div>
      <button className="editor__button--save">
        <Link to="/" className="editor__button--save--link">
          SAVE YOUR MOOD
        </Link>
      </button>
      <button className="editor__button--cancel">
        <Link to="/" className="editor__button--cancel--link">
          I DON´T WANT TO SEND MY MOOD
        </Link>
      </button>
    </div>
  );
};

export default Editor;
