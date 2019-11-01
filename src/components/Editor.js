import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Editor.scss";

const Editor = props => {
  return (
    <div className="editor">
      <div className="editor__date">
        <label className="editor__date--label" for="date">
          Date
        </label>
        <input className="js-date editor__date--input" id="date" type="date" name="date" placeholder="21/4/2018" />
      </div>
      <div className="editor__mood">
        <label className="editor__mood--label" for="mood">
          Mood
        </label>
        <div className="editor__mood--inputs">
          <input className="editor__mood--inputs--smile" type="checkbox" name=":)" value=":)" /> :)
          <br />
          <input className="editor__mood--inputs--sad" type="checkbox" name=":(" value=":(" /> :(
          <br />
        </div>
      </div>
      <div className="editor__message">
        <label className="editor__message--label" for="message">
          Message
        </label>
        <input className="js-date editor__message--input" id="message" type="message" name="message" placeholder="¿Por qué es un buen día?" />
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
