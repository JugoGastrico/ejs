exports.formSubmited = function (req, res) {
  res.send(req.body);
  console.log(req.body);
};
