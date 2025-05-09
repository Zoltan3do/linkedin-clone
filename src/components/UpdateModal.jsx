/* eslint-disable react/prop-types */
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updateExperience } from '../redux/actions/ProfileSection'
import { useState } from 'react'
import token from "./tooken.json";



const userId = '66decad84d0def0015cef103'
const UpdateModal = (props) => {
  const API_KEY = token.AUTH
  const dispatch = useDispatch()
  console.log(props.data)

  const [esperienza, setEsperienza] = useState({})

  const handleInputChange = (field, value) => {
    setEsperienza({ ...esperienza, [field]: value })
    console.log(esperienza)
  }

  const updateFetch = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${props.data._id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(esperienza),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then((esperienze) => {
        console.log('stato attuale delle esperienze dopo la put', esperienze)
      })
      .catch((errore) => {
        console.log(errore, 'il tuo oggetto non è stato salvato')
      })
  }

  const handleUpdateExperience = () => {
    dispatch(updateExperience(esperienza))
    updateFetch()
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Inserisci le tue esperienze
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Azienda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.company || props.data.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Ruolo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.role || props.data.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Descrizione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.description || props.data.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Luogo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.area || props.data.area}
              onChange={(e) => handleInputChange('area', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Data di inizio</Form.Label>
            <Form.Control
              type="date"
              value={esperienza.startDate || props.data.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
            />
            <Form.Label className="text-secondary">Data di fine</Form.Label>
            <Form.Control
              type="date"
              value={esperienza.endDate || props.data.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Chiudi
        </Button>
        <Button type="submit" onClick={handleUpdateExperience}>
          Modifica
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default UpdateModal
