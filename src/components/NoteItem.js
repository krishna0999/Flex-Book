import React from "react";
import { Link } from "react-router-dom";
import "../NoteItem.css";

function NoteItem() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card my-3 bg-dark">
            <div class="card-body">
              <h5 class="card-title" style={{color : 'white'}}>Note Title</h5>
              <p class="card-text" style={{color : 'white'}}>
                Description of this particular note is this.
              </p>
              <Link to="/notedetails" class="btn btn-primary">
                Open note
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card my-3 bg-dark">
            <div class="card-body">
              <h5 class="card-title" style={{color : 'white'}}>Note Title</h5>
              <p class="card-text" style={{color : 'white'}}>
              Description of this particular note is this.
              </p>
              <Link to="/notedetails" class="btn btn-primary">
                Open note
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
