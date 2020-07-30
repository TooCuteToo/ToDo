function getToDoList(res, ToDo) {
  ToDo.find({}, (err, docs) => res.render("index.ejs", {docs}))
}

function removeToDo(req, res, ToDo) {
  ToDo.findOneAndRemove({_id: req.params.id}, (err, docs) => res.json({name: "lala"}));
}

function updateToDo(req, res, ToDo) {
  ToDo.findOne({_id: req.params.id}, (err, doc) => {
    doc.updateOne({done: !doc.done}, (err, doc) => res.status(201).send("Your todo is created"));
  });
}

function createToDo(req, res, ToDo) {
  const toDo = new ToDo(req.body);
  ToDo.findOne({ name: req.body.name }, (err, docs) => {
    if (docs) res.send("Da ton tai");
    else toDo.save((err, doc) => res.send(doc));
  });
}

module.exports = {
  getToDoList,
  removeToDo,
  updateToDo,
  createToDo
}