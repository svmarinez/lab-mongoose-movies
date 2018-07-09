const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (res, req, next) => {
  Celebrity.find({})
    .then(celebrities => res.render("celebrities/index", { celebrities }))
    .catch(err => next());
});

router.get("/:id", (req, res, next) => {    
  let celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then(celebrity => res.render("celebrities/show", { celebrity }))
    .catch(err => next());
});