const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const dbFilePath = path.join(__dirname, "..", "db", "db.json");

const getNotes = async (req, res) => {
  try {
    const data = fs.readFileSync(dbFilePath, "utf-8");
    const notes = JSON.parse(data);
    res.json(notes);
  } catch (error) {
    console.error("Error reading notes from db.json:", error);
    res.status(500).send("Internal Server Error");
  }
};

const saveNote = async (req, res) => {
  try {
    const data = fs.readFileSync(dbFilePath, "utf-8");
    const notes = JSON.parse(data);
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    notes.push(newNote);

    fs.writeFileSync(dbFilePath, JSON.stringify(notes, null, 2), "utf-8");
    res.json(newNote);
  } catch (error) {
    console.error("Error saving note to db.json:", error);
    res.status(500).send("Internal Server Error");
  }
};

deleteNote = async (req, res) => {
  try {
    const data = fs.readFileSync(dbFilePath, "utf-8");
    let notes = JSON.parse(data);
    const noteIndex = notes.findIndex((note) => note.id === req.params.id);
    if (noteIndex !== -1) {
      const deletedNote = notes.splice(noteIndex, 1)[0];
      fs.writeFileSync(dbFilePath, JSON.stringify(notes, null, 2), "utf-8");
      res.json(deletedNote);
    } else {
      res.status(404).send("Note not found");
    }
  } catch (error) {
    console.error("Error deleting note from db.json:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getNotes, saveNote, deleteNote };
