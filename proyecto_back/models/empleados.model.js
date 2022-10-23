const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    id_empleado:{type: Number, require: true, max:250},
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:40},
    telefono:{type: String, required: true, max:15},
    email:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150},
    horario:{type: String, required: true, max:40}  
});

module.exports = mongoose.model("empleados", EmpleadosSchema); 