import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";


export default class EmpleadosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empleado: {
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        direccion: "",
      },
    };
  }

  setValue(inicioe, value) {
    this.setState({
      empleado: {
        ...this.state.empleado,
        [inicioe]: value,
      },
    });
  }

  guardarEmpleados() {
    request
      .post("/empleados", this.state.empleado)
      .then((response) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Container id="empleados-crear-container">
        <Row>
          <h1>Crear Empleados</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("apellido", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("telefono", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("correo", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("direccion", e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => console.log(this.guardarEmpleados())}
            >
              Guardar Empleado
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
