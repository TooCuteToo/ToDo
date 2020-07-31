const express = require("express");
const ToDo = require("../models/db.js");
const {getToDoList, removeToDo, removeAllToDo, updateToDo, createToDo} = require("../controllers/todoControl");

const router = express.Router();

router.get("/", (req, res) => getToDoList(res, ToDo));

router.delete("/:id", (req, res) => removeToDo(req, res, ToDo));  

router.patch("/:id", (req, res) => updateToDo(req, res, ToDo));

router.post("/", (req, res) => createToDo(req, res, ToDo));

router.delete("/", (req, res) => removeAllToDo(req, res, ToDo));

module.exports = router;