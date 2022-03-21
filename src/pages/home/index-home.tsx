import React from "react";
import TitlePage from "../../components/shared/title-page";
import { Card, Col, Row } from "react-bootstrap";
import { http } from "../../api";

const IndexHome = (): React.ReactElement => {

  const api = http()

  const [avgAges, setAvgAges] = React.useState(0)
  const [totalClients, setTotalClients] = React.useState(0)
  const [totalRegisteredToday, setTotalRegisteredToday] = React.useState(0)

  React.useEffect(() => {
    const getData = () => {
      api.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/dashboard`)
        .then(res => {
          if (res.data.success) {
            setAvgAges(res.data.avgAges)
            setTotalClients(res.data.totalClients)
            setTotalRegisteredToday(res.data.totalRegisteredToday)
          }
        }).catch((err) => {
      })
    }
    getData()
  }, [])


  return (
    <React.Fragment>
      <Row className={"page__header"}>
        <Col>
          <TitlePage title={"Dashboard"}/>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Clientes Registrados</Card.Title>
              <Card.Text>
                { totalClients }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Promedio de edades de Clientes</Card.Title>
              <Card.Text>
                { avgAges }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Clientes registrados hoy</Card.Title>
              <Card.Text>
                { totalRegisteredToday }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </React.Fragment>
  )
}

export default IndexHome
