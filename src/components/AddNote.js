import React, { useContext, useState, useEffect, useRef } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/notesContext";
import { useNavigate } from "react-router";

function AddNote() {
  const context = useContext(noteContext);
  const { notes, addNote, getNotes, editNote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else {
      navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const [note2, setnote2] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleAddClick = (e) => {
    e.preventDefault();
    addNote(note);
  };

  const handleEditClick = () => {
    editNote(note2.id, note2.etitle, note2.edescription, note2.etag);
    ref.current.click();
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote2({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
  };

  const onChangeHandle = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const onChangeHandle2 = (e) => {
    setnote2({ ...note2, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          onChange={onChangeHandle}
          min={4}
        />
        <div id="title-note" className="form-text">
          Add a title to your note.
        </div>
      </div>
      <label className="form-label">Description</label>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="description"
          name="description"
          style={{ height: "120px" }}
          onChange={onChangeHandle}
          min={5}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Tag
        </label>
        <input
          type="text"
          id="tag"
          name="tag"
          className="form-control"
          onChange={onChangeHandle}
        />
      </div>
      <button disabled={note.title.length<4 || note.description.length<5} type="submit" className="btn btn-success" onClick={handleAddClick}>
        Add
      </button>

      {/* Adding a modal for updating notes functionality */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ backgroundColor: "white" }}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="etitle"
                  name="etitle"
                  className="form-control"
                  onChange={onChangeHandle2}
                  value={note2.etitle}
                  min={4}
                />
                <div id="title-note" className="form-text">
                  Add a title to your note.
                </div>
              </div>
              <label className="form-label">Description</label>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="edescription"
                  name="edescription"
                  style={{ height: "120px" }}
                  onChange={onChangeHandle2}
                  value={note2.edescription}
                  min={5}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  id="etag"
                  name="etag"
                  className="form-control"
                  onChange={onChangeHandle2}
                  value={note2.etag}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleEditClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="my-5">View Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              title={note.title.slice(0,20)}
              description={note.description.slice(0,45)}
              note={note}
              updateNote={updateNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default AddNote;
