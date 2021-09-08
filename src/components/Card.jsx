import React from "react";
import Note from "./Note";
import notes from "./notes";

function Card() {
    return (notes.map(note => <Note key = {note.key} noteTitle = {note.noteTitle} noteData = {note.noteData}/>));
}

export default Card;