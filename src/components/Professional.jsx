import { Card, Col, Row } from "react-bootstrap";
import logoEpicode from '../assets/imgs/logoEpicode.png'
const Professional = () => {
  return (
    <>
      <Row className="mt-2 mb-2">
        <Col>
          <Card className="p-2">
            <Row className="justify-content-between ">
              <Col className="col-7">
                <Card.Title className="ps-2">Formazione</Card.Title>
              </Col>
              <Col className="col-4 col-lg-3 col-xl-2 d-flex justify-content-evenly text-secondary">
                <i className="bi bi-plus-lg fs-4"></i>
                <i className="bi bi-pencil pointer fs-5"></i>
              </Col>
            </Row>
            <Row className="border-bottom mx-2 my-1">
              <Col className="col-3 col-sm-2 col-md-3 col-lg-2 col-xl-1">
                <img
                  src={logoEpicode}
                  style={{ width: "3em" }}
                  alt="logo"
                />
              </Col>
              <Col className="col-11 col-sm-10 col-md-9 col-lg-10 col-xl-10 ms-xl-4 ">
                <p className="fw-semibold mb-0">Epicode</p>
                <p className="mb-0 fs-6">Master I°</p>
                <p className="text-secondary mb-0 fs-6">06/24 - in corso</p>
                <p className="fs-6">In corso</p>
                <p>Full-stack Developer</p>
                <p className="fw-semibold fs-6">
                  HTML - CSS - JS - BOOTSTRAP - SASS - REACT - TS ...{" "}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Professional;
