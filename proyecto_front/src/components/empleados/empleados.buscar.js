import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helper/helper';
import './empleados.css';

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() { 
        return (  
            <Container id='empleados-buscar-container'>
                <Row>
                    <h1>Buscar Empleados</h1>
                </Row>
            </Container>
        );
    }
}