import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 className="noteTitle">{props.noteTitle}</h1>
      <p className="noteData">{props.noteData}</p>
    </div>
  );
}

export default Note;
