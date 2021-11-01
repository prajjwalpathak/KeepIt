import Data from "./Data";
import "./Note.css";

const Note = () => {
  return (
    <div className="note">
      <div className="noteTopDiv">
        <h1 className="noteTitle">{Data[0].noteTitle}</h1>
        <button className="noteDeleteButton">Delete</button>
      </div>
      <p className="noteData">{Data[0].noteData}</p>
    </div>
  );
};

export default Note;
