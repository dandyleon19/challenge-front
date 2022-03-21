import React from "react";
import {Button, Col, Row, Table} from "react-bootstrap";
import TitlePage from "../../components/shared/title-page";
import Pagination from 'react-bootstrap/Pagination'
import moment from "moment/moment";
import {Link} from "react-router-dom";

import {http} from '../../api'

interface Client {
  id: number,
  name: string,
  lastname: string,
  birthday: string,
  createdAt: string,
  updatedAt: string
}

const IndexClients = (): React.ReactElement => {

  const api = http()

  moment.locale();

  const [clients, setClients] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState()
  const [totalPages, setTotalPages] = React.useState([0])

  React.useEffect(() => {
    const getClients = () => {
      api.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/clients`)
        .then(res => {
          if (res.data.success) {
            setClients(res.data.paging.clients)
            setCurrentPage(res.data.paging.currentPage)
            setTotalPages(convertTotalPagesInArray(res.data.paging.totalPages))
          }
        }).catch((err) => {
        console.error(err.message)
      })
    }
    getClients()
  }, [])

  const getClientsByPage = async (page: number) => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/clients?page=${page}`)
      .then(res => {
        if (res.data.success) {
          setClients(res.data.paging.clients)
          setCurrentPage(res.data.paging.currentPage)
          setTotalPages(convertTotalPagesInArray(res.data.paging.totalPages))
        }
      }).catch((err) => {
      console.error(err.message)
    })
  }

  const convertTotalPagesInArray = (totalPages: number) => {
    let init: number = 0
    let total: number[] = []
    while (init < totalPages) {
      if (init < totalPages) {
        total.push(init)
      }
      init++
    }
    return total;
  }

  return (
    <React.Fragment>
      <Row className={"page__header"}>
        <Col>
          <TitlePage title={"Listado de Clientes"}/>
        </Col>
        <Col style={{display: "flex"}} className={"page__create-button"}>
          <Button variant="primary">
            <Link to={"/clients/create"} className={"page__button"}>Crear Cliente</Link>
          </Button>
        </Col>
      </Row>

      <Table responsive="md">
        <thead>
        <tr>
          <th>#</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Fecha de Nacimiento</th>
          <th>Fecha de Registro</th>
          <th>Fecha de Actualización</th>
          <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {clients.map((client: Client) => {
          return <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.lastname}</td>
            <td>{moment(client.birthday).format('LL')}</td>
            <td>{moment(client.createdAt).fromNow()}</td>
            <td>{moment(client.updatedAt).fromNow()}</td>
            <td>Acciones</td>
          </tr>
        })}
        </tbody>
      </Table>
      <div className={"pagination__content"}>
        <Pagination size="sm">
          {totalPages.map((page) => {
            return <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => {
                getClientsByPage(page).then(r => r)
              }}>
              {page + 1}
            </Pagination.Item>
          })}
        </Pagination>
      </div>
    </React.Fragment>
  )
}

export default IndexClients
