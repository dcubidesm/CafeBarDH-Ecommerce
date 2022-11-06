const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombre: {type: String, required: true, max:60},
    apellido: {type: String, required: true, max:60},
    telefono: {type: String, required: true, max:15},
    correo: {type: String, required: false, max:70},
    direccion: {type: String, required: false, max:150}
});

module.exports = mongoose.model("empleados", EmpleadosSchema);