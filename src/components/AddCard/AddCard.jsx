import "./AddCard.css"

const AddCard = () => {
  return (
    <div className="addCardDiv">
      <form>
        <input className="addTitle" type="text" placeholder="Enter the title" />
        <input className="addNote" type="text" placeholder="Create a note ..." />
        <button className="addButton" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddCard;
