const Empleado = require("../models/empleados.model"); 
let response ={
    msg: "",
    exito: false
}
//CREACION
exports.create = function(req,res){
    let empleado = new Empleado({
        id_empleado: req.body.id_empleado,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion : req.body.direccion,
        horario: req.body.horario,
    })

    empleado.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el empleado" 
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}
//CONSULTAR TOTAL
exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

//CONSULTAR UN REGISTRO
exports.findOne = function(req,res){
    Empleado.findOne({id_empleado: req.params.id_empleado},function(err, empleado){
        res.json(empleado)
    })
}

//UPDATE
exports.update = function(req,res){
    let empleado = {
        id_empleado: req.body.id_empleado,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion : req.body.direccion,
        horario: req.body.horario
    }
    
    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se modifico correctamente"
        res.json(response)
    })
}

//DELETE
exports.remove = function(req,res){
    Empleado.findByIdAndRemove({id_empleado: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se elimino correctamente"
        res.json(response)
    })
}
