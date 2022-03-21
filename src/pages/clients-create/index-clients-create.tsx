import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitlePage from "../../components/shared/title-page";
import ClientForm from "../../components/clients/client-form";

const IndexClientsCreate = (): React.ReactElement => {
  return (
    <React.Fragment>

      <Row className={"page__header"}>
        <Col>
          <TitlePage title={"Formulario de Cliente"} />
        </Col>
      </Row>

      <Container>
        <ClientForm />
      </Container>


    </React.Fragment>
  )
}

export default IndexClientsCreate
