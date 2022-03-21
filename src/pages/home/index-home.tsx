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
              <Card.Title><b>Promedio de edades de Clientes</b></Card.Title>
              <Card.Text>
                { Math.round(avgAges * 100) / 100 }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title><b>Clientes Registrados</b></Card.Title>
              <Card.Text>
                { totalClients }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title><b>Clientes registrados hoy</b></Card.Title>
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
