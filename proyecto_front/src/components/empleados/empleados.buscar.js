import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./empleados.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
  {
    id: 1,
    name: "Gaseosa",
    price: 1200,
  },
];

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Productos</h1>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {(props) => (
            <>
                <h3>Input something at below input field:</h3>
                <SearchBar {...props.searchProps} />
                <hr />
                <PaginationProvider pagination={paginationFactory(options)}>
            {({ paginationProps, paginationTableProps }) => (
              <div>
                <SizePerPageDropdownStandalone {...paginationProps} />
                <BootstrapTable
                  keyField="id"
                  data={products}
                  columns={columns}
                  {...paginationTableProps}
                />
                <PaginationListStandalone 
                {...paginationProps}
                {...props.baseProps}
                />
              </div>
            )}
          </PaginationProvider>

        </>
            )}
          </ToolkitProvider>

          
        </Row>
      </Container>
    );
  }
}
