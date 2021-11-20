import React, { useState } from "react";
import NoteContext from "./notesContext";

const NoteState = (props) => {

  
  const initialNote = [
    {
      "_id": "6195d6576068205b5566df43",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:07.655Z",
      "__v": 0
    },
    {
      "_id": "6195d6586068205b5566df45",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:08.445Z",
      "__v": 0
    },
    {
      "_id": "6195d6596068205b5566df47",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:09.081Z",
      "__v": 0
    },
    {
      "_id": "6195d6596068205b5566df49",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:09.291Z",
      "__v": 0
    },
  ]
  const [notes, setnotes] = useState(initialNote)

  //Add a note
  const addNote = ({title, description, tag}) =>{
    console.log("Adding new note")
    const note = {
      "_id": "6197141c5a3aa9596f6d801b",
      "user": "619477d73db70eff83aaf58e",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-11-19T03:03:56.591Z",
      "__v": 0
    }
    setnotes(notes.concat(note));
  }

  //Delete a note
  const deleteNote = (id) =>{
    console.log("Note deleted." + id);
    const newNotes = notes.filter((note) => {return note._id !== id})
    setnotes(newNotes);
  }

  //Edit a note
  const editNote = () =>{

  }
  return (
    <NoteContext.Provider 
      value={{notes, addNote, deleteNote, editNote}}>{props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
