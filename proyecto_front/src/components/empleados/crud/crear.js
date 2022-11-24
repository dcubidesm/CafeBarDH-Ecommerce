import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";



export default class EmpleadosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      empleado: {
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        direccion: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this); 
  }

  setValue(inicioe, value) {
    this.setState({
      empleado: {
        ...this.state.empleado,
        [inicioe]: value,
      },
    });
  }

  //este me trae desde el mensaje desde el back
  guardarEmpleados() {
    this.setState({ loading: true });
    request
      .post("/empleados", this.state.empleado)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }

  onExitedMessage () {
    if (this.state.rediret) this.props.changeTab( 'buscar' );
  }
  
  render() {
    return (
      <Container id="empleados-crear-container">
        <MessagePrompt 
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading  show={this.state.loading} />
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
