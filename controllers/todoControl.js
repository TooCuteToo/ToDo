const sanitizeHtml = require('sanitize-html');

function getToDoList(res, ToDo) {
  ToDo.find({}, (err, docs) => res.render("index.ejs", {docs}))
}

function removeToDo(req, res, ToDo) {
  ToDo.findOneAndRemove({_id: req.params.id}, (err, docs) => res.json({name: "lala"}));
}

function removeAllToDo(req, res, ToDo) {
  ToDo.deleteMany({}, (err, docs) => res.send("Your todo is cleared"));
}

function updateToDo(req, res, ToDo) {
  ToDo.findOne({_id: req.params.id}, (err, doc) => {
    doc.updateOne({done: !doc.done}, (err, doc) => res.status(201).send("Your todo is created"));
  });
}

function createToDo(req, res, ToDo) {
  const cleanName = sanitizeHtml(req.body.name, {allowedTags: [],  allowedAttributes: {}});
  const toDo = new ToDo({name: cleanName, done: req.body.done});

  ToDo.findOne({ name: cleanName }, (err, docs) => {
    if (docs) res.send("Da ton tai");
    else toDo.save((err, doc) => res.send(doc));
  });
}

module.exports = {
  getToDoList,
  removeToDo,
  removeAllToDo,
  updateToDo,
  createToDo
}