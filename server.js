const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const HOST =  process.env.HOST || "http://localhost";

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}`);
});
