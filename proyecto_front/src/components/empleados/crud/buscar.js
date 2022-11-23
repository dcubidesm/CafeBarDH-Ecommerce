import React from "react";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../../grid/grid";
import { request } from "../../helper/helper";
import "../empleados.css";


const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "apellido",
    text: "Apellido",
  },
  {
    dataField: "telefono",
    text: " Teléfono",
  },
  {
    dataField: "correo",
    text: "Correo Electrónico",
  },
  {
    dataField: "direccion",
    text: " Dirección",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <DataGrid url="/empleados" columns={columns} />
        </Row>
      </Container>
    );
  }
}
