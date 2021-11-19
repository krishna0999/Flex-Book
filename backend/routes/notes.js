const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const Note = require("../models/Note");

//ROUTE 1 : Fetch all the notes of a user using GET : api/notes/fetchalluser
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }); // '.find' ---> to search if there
    res.json(notes); // is any note for the given id.
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

//ROUTE 2 : Add note using POST : api/notes/addnote
router.post(
  "/addnote",
  fetchuser,
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      //Proceed if there are no errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        // Creating a new note to add in the database
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save(); // '.save' ---> to save the notes in mongodb
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal error occured");
    }
  }
);

//ROUTE 3 : Update an existing note using PUT : api/notes/updatenote/:id
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (title) {
      newNote.description = description;
    }
    if (title) {
      newNote.tag = tag;
    }

    //Find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

//ROUTE 4 : Delete a note using DELETE : api/notes/deletenote/:id
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //Find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

module.exports = router;
