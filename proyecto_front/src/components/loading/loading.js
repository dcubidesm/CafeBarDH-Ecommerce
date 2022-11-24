import React from "react";
import { Spinner } from "react-bootstrap";
import "./loading.css";

export default class loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, //
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
    this.setState({ show: nextProps.show });
    }
  }

  render() {
    //por eso se pone this state entre etiquetas porque no lo lee.
    //la idea es que el spinner funcione cuando se le de click en el boton de iniciar sesion, por eso se pone el metodo IniciarSesion()
    return (
      <>
        {this.state.show ? (
          <div id="loading-backdrop">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : null}
      </>
    );
  }
}
