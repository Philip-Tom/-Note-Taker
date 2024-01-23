const express = require("express");
const notesController = require("../../controllers/notes.controller");

const router = express.Router();

router.get("/", notesController.getNotes);
router.post("/", notesController.saveNote);
router.delete("/:id", notesController.deleteNote);

module.exports = router;
