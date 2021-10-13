import React, { useState } from "react";
import Note from "./Note";

const AddCard = ()=> {
    const [card, newCard] = useState(Note);
    newCard(Note.push({
    }))
}


const Add = ()=> {
    return (
        <div className="addDiv">
            <input className="addTitle" type="text" placeholder="Enter the title"></input>
            <textarea className="textArea" rows="1" placeholder="Create a note ..."></textarea>
            <button className="addButton" onClick={AddCard}>ADD</button>
        </div>
    );
}

export default Add;