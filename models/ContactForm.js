const validator = require('validator');
const { form } = require("../controllers/contactanos");

let Form = function(data) {
    this.data = data;
    this.errors = [];
}

Form.prototype.validate = function(){
    if (this.data.username == "") {
        this.errors.push("Debes ingresar un nombre y apellido.")
    }
    if(this.data.username != "" && !validator.isAlpha(this.data.username)){
        this.errors.push("El nombre y apellido solo puede contener letras")
    }
    if(this.data.telephone != "" && !validator.isNumeric(this.data.telephone)){
        this.errors.push("El número teléfonico solo debe contener números")
    }
    if (this.data.email == "") {
        this.errors.push("Debes ingresar un correo electrònico de contacto.")
    }
};

Form.prototype.register = function(){
    // Step #1: Validate user data
    this.validate();
    // Step #2: Only if there are no validation errors
        //then save the user data into a db.
};

module.exports = Form;