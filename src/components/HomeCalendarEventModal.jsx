/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const HomeCalendarEventModal = ({ show, handleClose, handleCreateEvent }) => {
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        description: ''
    });

    // Funzione per aggiornare i dettagli dell'evento
    const handleChange = (e) => {
        setEventDetails({
            ...eventDetails,
            [e.target.name]: e.target.value
        });
    };

    // Funzione per gestire il salvataggio dell'evento
    const handleSubmit = () => {
        if (!eventDetails.eventName || !eventDetails.startDate || !eventDetails.startTime) {
            alert('Per favore compila tutti i campi obbligatori.');
            return;
        }

        if (handleCreateEvent) {
            handleCreateEvent(eventDetails);  // Salva l'evento
            handleClose();  // Chiudi il modale dopo il salvataggio
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Crea un evento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome evento</Form.Label>
                        <Form.Control
                            type="text"
                            name="eventName"
                            placeholder="Inserisci il nome dell'evento"
                            value={eventDetails.eventName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Data e ora di inizio</Form.Label>
                        <div className="d-flex">
                            <Form.Control
                                type="date"
                                name="startDate"
                                value={eventDetails.startDate}
                                onChange={handleChange}
                                className="me-2"
                            />
                            <Form.Control
                                type="time"
                                name="startTime"
                                value={eventDetails.startTime}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Data e ora di fine</Form.Label>
                        <div className="d-flex">
                            <Form.Control
                                type="date"
                                name="endDate"
                                value={eventDetails.endDate}
                                onChange={handleChange}
                                className="me-2"
                            />
                            <Form.Control
                                type="time"
                                name="endTime"
                                value={eventDetails.endTime}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="Inserisci i dettagli dell'evento"
                            value={eventDetails.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annulla
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Salva evento
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HomeCalendarEventModal;

