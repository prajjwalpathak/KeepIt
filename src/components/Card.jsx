import React from "react";
import Note from "./Note"; 

const Card = ()=> {
    return (
        Note.map((note)=>
        <div className="note">
            <h1 className="noteTitle">{note.noteTitle}</h1>
            <p className="noteData">{note.noteData}</p>
        </div>
        )
    );
}

export default Card;