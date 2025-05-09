import { Col, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const Resources = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Card>
          <Card.Body className="ms-2">
            <Card.Title className="mb-1">Risorse</Card.Title>
            <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
              <i className="bi bi-eye-fill me-2"></i>
              <span className="fs-7 fw-normal">Solo per te</span>
            </Card.Subtitle>
            <div className="card-text">
              <div className="d-flex justify-content-start border-bottom mb-2">
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match me-2"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
                  </svg>
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <h6 className="mb-0">
                    Modalità creazione di contenuti
                    <Badge text="dark" className="ms-2 bg-gray fw-normal fs-7">
                      No
                    </Badge>
                  </h6>
                  <p className="fs-7 mb-2">
                    Fatti scoprire, metti in risalto i contenuti sul tuo profilo
                    e accedi agli strumenti di crazione
                  </p>
                </div>
              </div>
            </div>
            <div className="card-text">
              <div className="d-flex justify-content-start">
                <h4>
                  <i className="bi bi-people-fill me-2"></i>
                </h4>
                <div>
                  <h6 className="mb-0">La mia rete</h6>
                  <span className="fs-7">
                    Salva e gestisci i tuoi collegamenti e interessi
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
          <a className="text-decoration-none" href="#">
            <div className="d-flex justify-content-center align-items-center border-top p-2 link-dark text-decoration-none mtlr text-secondary ">
              Mostra tutte le risorse (5){" "}
              <i className="bi bi-arrow-right ms-1 "></i>
            </div>
          </a>
        </Card>
      </Col>
    </Row>
  );
};

export default Resources;
