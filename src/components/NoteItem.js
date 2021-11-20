import React from "react";
import { Link } from "react-router-dom";
import "../NoteItem.css";

function NoteItem(props) {
  return (
    <div class="card col-md-3 bg-dark m-1">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          {props.description}
        </p>
        <Link to="/notedetails" class="btn btn-primary">
          Open note
        </Link>
      </div>
    </div>
  );
}

export default NoteItem;
