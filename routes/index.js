const express = require("express");
const apiRoutes = require("./api");

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

router.get('/notes', (req, res) => {
  res.sendFile('notes.html', { root: './public' });
});

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("404 Not Found");
});

module.exports = router;
