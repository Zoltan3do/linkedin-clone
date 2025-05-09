import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// eslint-disable-next-line react/prop-types
const ActivitiesModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Quali contenuti vuoi mostrare per primi?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">
          La tua attività recente mostrerà solo i contenuti degli ultimi 360
          giorni
        </p>

        <InputGroup>
          <InputGroup.Radio aria-label="Radio button for following text input" />

          <Form.Control aria-label="Text input with radio button" />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Salva</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActivitiesModal;
