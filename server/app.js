const express = require("express");
const cors = require("cors");

const { getBooks } = require("./controllers/books.controllers.js");

const app = express();
app.use(cors());

app.get("/api/books", getBooks);

exports.app = app;
