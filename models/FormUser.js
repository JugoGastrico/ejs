let User = function (data) {
  this.data = data;
  this.errors = [];
  //creo la propiedad data para que guarde esta informacion
};

User.prototype.validate = function () {
  if (this.data.email == "") {
    this.errors.push("Debes ingresar un correo correcto");
  }
  if (this.data. == "") {
    this.errors.push("Debes ingresar un usuario");
  }
};

User.prototype.register = function () {
  //Step#1 Validate user data
  this.validate();
  //Step#2 Only if there are no validation errors
  // then save the user data into a database
};

module.exports = UserForm;
