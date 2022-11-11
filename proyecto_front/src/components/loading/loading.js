import React from 'react';
import { Spinner } from 'react-bootstrap';
import "./loading.css";

export default class loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (  
            <div id="loading-backdrop">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }
}
 
