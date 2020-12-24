const User = require("../models/FormUser");

exports.formSubmited = function (req, res, next) {
  let user = new User(req.body);
  user.register();
  if (user.errors.lenth) {
    res.send(user.errors);
  } else {
    res.send("gracias por llenar el form");
  }
};
