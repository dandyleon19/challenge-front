import {Button, FloatingLabel, Form} from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {http} from '../../api'

const ClientForm = (): React.ReactElement => {

  const api = http()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const createClient = async (data: any) => {
    const client = {
      name: data.name,
      lastname: data.lastname,
      birthday: data.birthday
    }

    await api.post(`${process.env.REACT_APP_BACKEND_URL}api/v1/clients`, client)
      .then((res) => {
        navigate("/clients")
      }).catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <Form  onSubmit={handleSubmit((data) => createClient(data))}>
      <FloatingLabel
        controlId="name"
        label="Nombres"
        className="mb-3"
      >
        <Form.Control
          {...register("name", { required: "Este campo es requerido.", minLength: {
            value: 4,
              message: "El texto debe ser mayor a 4 caracteres."
            }})}
          isInvalid={!!errors.name}
          type="text"/>
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </FloatingLabel>

      <FloatingLabel
        controlId="lastname"
        label="Apellidos"
        className="mb-3"
      >
        <Form.Control
          {...register("lastname", { required: "Este campo es requerido.", minLength: {
            value: 4,
              message: "El texto debe ser mayor a 4 caracteres."
            }})}
          isInvalid={!!errors.lastname}
          type="text"/>
        <Form.Control.Feedback type="invalid">
          {errors.lastname?.message}
        </Form.Control.Feedback>
      </FloatingLabel>

      <FloatingLabel
        controlId="birthday"
        label="Fecha de Nacimiento"
        className="mb-3"
      >
        <Form.Control
          {...register("birthday", { required: "Este campo es requerido"})}
          isInvalid={!!errors.birthday}
          type="date"/>
        <Form.Control.Feedback type="invalid">
          {errors.birthday?.message}
        </Form.Control.Feedback>
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default ClientForm
