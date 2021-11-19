import React from "react";
import NoteItem from "./NoteItem";

function AddNote() {
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
      <NoteItem/>
      <NoteItem/>
      <NoteItem/>
      <NoteItem/>
      <NoteItem/>
    </>
  );
}

export default AddNote;
