import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../../helper/helper";
import "../empleados.css";
import DataGrid from "../../grid/grid";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompt from "../../prompts/confirmation";

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
    this.state = {
      loading: false,
      IdEmpleado: null,
      confirmation: {
        title: "Eliminar el empleado",
        text: "¿Deseas eliminar el empleado?",
        show: false,
      },
      message:{
        text:"",
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
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

  onClickEditButton(row) {
    this.props.setIdEmpleado(row._id);
    this.props.changeTab("editar");
  }

  onClickDeleteButton(row) {
    this.setState({
      IdEmpleado: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarEmpleado()
    );
  }

  eliminarEmpleado() {
    this.setState({ loading: true });
    request
      .delete(`/empleados/${this.state.IdEmpleado}`)
      .then((response) => {
          this.setState({
            loading: false,
            message:{
              text:response.data.msg,
              show: true,
            },
          });
          if(response.data.exito) this.reloadPage();
          //this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage(){
    setTimeout(() => {
      window.location.reload();
    },2500);
  }

  render() {
    return (
      <Container id="empleados-buscar-container">
        <ConfirmationPrompt
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />

        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <DataGrid
            url="/empleados"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
