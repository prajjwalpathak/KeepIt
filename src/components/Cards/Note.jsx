import Data from "./Data";
import "./Note.css"

const Note = () => {
    return (
        <div className="note">
            <h1 className="noteTitle">{Data[0].noteTitle}</h1>
            <p className="noteData">{Data[0].noteData}</p>
        </div>
    );
};

export default Note;