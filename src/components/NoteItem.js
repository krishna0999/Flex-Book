import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../NoteItem.css";
import noteContext from "../context/notes/notesContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const {note, updateNote} = props;
  return (
    <div className="card col-md-3 bg-dark m-1">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">
          {note.description}
        </p>
        <Link to="/notedetails" className="btn btn-primary">
          Open note
        </Link>
        <i className="fas fa-minus-circle fa-lg m-2" style={{color : 'red'}} onClick={() => {
          deleteNote(note._id);
        }}></i>
        <i className="fas fa-pen-square fa-lg m-2" style={{color : '#6498ed'}} onClick={() => {
          updateNote(note);
        }}></i>
      </div>
    </div>
  );
}

export default NoteItem;
