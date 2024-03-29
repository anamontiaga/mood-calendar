import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Editor.scss";

const Editor = props => {
  const { getDate, getMood, getMessage, checkedface, cancelMood, cancelSendingMood } = props;
  return (
    <div className="editor">
      <form className="editor__date">
        <label className="editor__date--label" htmlFor="date">
          Date
        </label>
        <input className="js-date editor__date--input" id="date" type="date" name="date" placeholder="21/4/2018" onChange={getDate} required />
      </form>
      <div className="editor__mood">
        <label className="editor__mood--label" htmlFor="mood">
          Mood
        </label>
        <div className="editor__mood--inputs">
          <input className="editor__mood--inputs--smile" type="checkbox" name=":)" value=":)" onChange={getMood} /> :)
          <br />
          <input className="editor__mood--inputs--sad" type="checkbox" name=":(" value=":(" onChange={getMood} /> :(
          <br />
        </div>
      </div>
      <div className="editor__message">
        <label className="editor__message--label" htmlFor="message">
          Message
        </label>
        {checkedface === ":)" ? <input className="js-date editor__message--input" id="message" type="message" name="message" placeholder="¿Por qué es un buen día?" onChange={getMessage} /> : <input className="js-date editor__message--input" id="message" type="message" name="message" placeholder="Lo siento, hoy no puedes dejar un mensaje" onChange={getMessage} disabled />}
      </div>
      <button className="editor__button--save">
        <Link to="/" className="editor__button--save--link" onClick={cancelSendingMood}>
          SAVE YOUR MOOD
        </Link>
      </button>
      <Link to="/">
        <button className="editor__button--cancel" onClick={cancelMood}>
          I DON´T WANT TO SEND MY MOOD
        </button>
      </Link>
    </div>
  );
};

export default Editor;
