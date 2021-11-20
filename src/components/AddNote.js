import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/notesContext";

function AddNote() {
  const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Title
        </label>
        <input type="text" class="form-control"  />
        <div id="title-note" class="form-text">
          Add a title to your note.
        </div>
      </div>
      <label className="form-label">
          Description
        </label>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style={{height : '120px'}}
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">
        Add
      </button>

      <h2 className="my-5">View Notes</h2>
      <div class="row">
      {notes.map((note) => {
        return <NoteItem title={note.title} description={note.description}/>;
      })}
      </div>
    </>
  );
}

export default AddNote;
