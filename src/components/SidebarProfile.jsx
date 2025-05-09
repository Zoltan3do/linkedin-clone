import { useState } from "react";
import { Col, Button, Modal,Card } from "react-bootstrap";
import { ImPencil } from "react-icons/im";

const SidebarProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [lingua, setLingua] = useState("Italiano");

  const lingueDisponibili = [
    "Italiano",
    "Inglese",
    "Francese",
    "Spagnolo",
    "Tedesco",
    "Chinese",
  ];

  const handleChangeLingua = (newLingua) => {
    setLingua(newLingua);
    setShowModal(false); // Chiudi il modale dopo la selezione
  };

  return (
    <>
      <Col className="mb-3 mt-3" >
      <Card className="border border-1 rounded-2 p-2">
        {/* Sezione Lingua del profilo */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Lingua del profilo</h4>
            <p className="text-start">{lingua}</p>
          </div>
          <div>
            <Button
              variant="outline-secondary"
              className="border-0"
              onClick={() => setShowModal(true)}
            >
              <ImPencil />
            </Button>
          </div>
        </div>
        <hr />
        
        {/* Sezione Profilo pubblico e URL */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Profilo pubblico e URL</h4>
            <p className="text-start">
              <a className="text-dark" href="https://www.linkedin.com/in/">
                https://www.linkedin.com/in/
              </a>
            </p>
          </div>
          <div>
            <Button variant="outline-secondary" className="border-0">
              <ImPencil />
            </Button>
          </div>
        </div>
        </Card>
      </Col>

      {/* Modale per la scelta della lingua */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona la lingua</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {lingueDisponibili.map((linguaOption) => (
            <Button
              key={linguaOption}
              variant="outline-primary"
              className="w-100 my-1"
              onClick={() => handleChangeLingua(linguaOption)}
            >
              {linguaOption}
            </Button>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SidebarProfile;
