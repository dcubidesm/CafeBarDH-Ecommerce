const express = require("express")
const router = express.Router()
const empleadosController = require("../controllers/empleados.controller");

router.post("/",empleadosController.create)
router.get("/",empleadosController.find)
router.get("/:id_empleado",empleadosController.findOne)
router.put("/:id_empleado",empleadosController.update)
router.delete("/:id_empleado",empleadosController.remove)

module.exports = router