const Form = require('../models/ContactForm');
const validator = require('validator')
exports.register = function (req, res) {
  let form = new Form(req.body);
  form.register();
  if(form.errors.length) {
    res.send(form.errors)
  } else{
    res.send("Genial, no hay errores.")
  }
};
