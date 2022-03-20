import React from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import TitlePage from "../../components/shared/title-page";
import {Link} from "react-router-dom";
import ClientForm from "../../components/clients/client-form";

const IndexClientsCreate = (): React.ReactElement => {
  return (
    <React.Fragment>

      <Row className={"page__header"}>
        <Col>
          <TitlePage title={"Creación de Cliente"} />
        </Col>
      </Row>

      <Container>
        <ClientForm />
      </Container>


    </React.Fragment>
  )
}

export default IndexClientsCreate
