import React, { useContext,useState } from "react";
import NoteContext from "../context/NoteContext";


const AddNotes = ()=>{

const context = useContext(NoteContext);
const {addNotes} = context

const [note, setNote] = useState({title:"",description: "",tag : "default"});

const handleoc = (e) => {
    e.preventDefault();
    addNotes(note.title,note.description,note.tag);
};

const onchange = (e) => {
  setNote({ ...note, [e.target.name]: e.target.value });
};
//we used ...note inorder to not to change the existing notes

return (
  <div>
    <form>
      <div className="mb-3">
        <label  className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          onChange={onchange}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          onChange={onchange}
          name="description"
          id="description"
        />
      </div>
      <button type="submit" onClick={handleoc} className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
}
export default AddNotes;
