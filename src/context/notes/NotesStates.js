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
    {
      "_id": "6195d6596068205b5566df4b",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:09.453Z",
      "__v": 0
    },
    {
      "_id": "6195d6596068205b5566df4d",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:09.630Z",
      "__v": 0
    },
    {
      "_id": "6195d6596068205b5566df4f",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:09.774Z",
      "__v": 0
    },
    {
      "_id": "6195d6596068205b5566df51",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:09.932Z",
      "__v": 0
    },
    {
      "_id": "6195d65a6068205b5566df53",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-18T04:28:10.152Z",
      "__v": 0
    },
    {
      "_id": "619714175a3aa9596f6d8015",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-19T03:03:51.390Z",
      "__v": 0
    },
    {
      "_id": "619714195a3aa9596f6d8017",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-19T03:03:53.385Z",
      "__v": 0
    },
    {
      "_id": "6197141b5a3aa9596f6d8019",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-19T03:03:55.436Z",
      "__v": 0
    },
    {
      "_id": "6197141c5a3aa9596f6d801b",
      "user": "619477d73db70eff83aaf58e",
      "title": "My First Note",
      "description": "Get the end points correct",
      "tag": "work",
      "date": "2021-11-19T03:03:56.591Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(initialNote)
  return (
    <NoteContext.Provider value={{notes, setnotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
