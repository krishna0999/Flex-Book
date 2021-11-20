import React, { useContext, useState } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/notesContext";

function AddNote() {
  const context = useContext(noteContext);
  const {notes, addNote} = context;

  const [note, setnote] = useState({title : "", description : "", tag : "default"});

  const handleAddClick = (e) => {
    e.preventDefault();
    addNote(note);
  }

  const onChangeHandle = (e) => {
    setnote({...note, [e.target.name] : e.target.value});
  }
  return (
    <>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Title
        </label>
        <input type="text" id="title" name="title" className="form-control" onChange={onChangeHandle} />
        <div id="title-note" className="form-text">
          Add a title to your note.
        </div>
      </div>
      <label className="form-label">
          Description
        </label>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="description"
          name="description"
          style={{height : '120px'}}
          onChange={onChangeHandle}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success" onClick={handleAddClick}>
        Add
      </button>

      <h2 className="my-5">View Notes</h2>
      <div className="row">
      {notes.map((note) => {
        return <NoteItem key={note._id} title={note.title.slice(0, 45)} description={note.description.slice(0, 45)} note={note}/>;
      })}
      </div>
    </>
  );
}

export default AddNote;
