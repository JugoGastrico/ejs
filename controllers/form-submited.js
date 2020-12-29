const Form = require('../models/ContactForm');
exports.register = function (req, res) {
  let form = new Form(req.body);
  form.register();
  console.log(req.body);
  if(form.errors.length) {
    res.send(form.errors)
  } else{
    res.send("Genial, no hay errores.")
  }
};
