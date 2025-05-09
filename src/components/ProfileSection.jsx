import { Button, Card, Col, Row, Spinner, Modal } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import ImageUploadProfile from "./UploadImageProfile";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  const [show, setShow] = useState(false);

  const state = useSelector((state) => state.profile);
  const [showPostModal, setShowPostModal] = useState(false);

  // Funzione per aprire il modale per la creazione di un post
  const handleCreatePostClick = () => {
    setShowPostModal(true);
  };

  
  // Funzione per chiudere il modale per la creazione di un post
  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  return (
    <>
      <Row className="mb-2" style={{marginTop:"98px"}}>
        <Col>
          {state.profile ? (
            <>
              <Card>
                <Card.Header className="p-0">
                  <div className="position-relative">
                    <div className="hero"></div>
                    <div className="position-absolute z-index-1 propic-container">
                      <img
                        src={state.profile.image}
                        alt="propic"
                        className="border border-3 rounded-circle border-white pointer w-100 h-100 objectfit-cover"
                      />
                    </div>
                    <i
                      onClick={handleCreatePostClick}
                      className="bi bi-camera-fill text-primary position-absolute px-2 py-1 rounded-circle pointer"
                      style={{
                        right: "25px",
                        top: "15px",
                        backgroundColor: "white",
                      }}
                    ></i>
                    <ImageUploadProfile
                      show={showPostModal}
                      hide={handleClosePostModal}
                    />
                  </div>
                </Card.Header>
                <div className="d-flex justify-content-end me-3 mt-3">
                  <i
                    className="bi bi-pencil text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                  ></i>
                </div>
                <Card.Body className="px-4 pb-4 pt-0">
                  <Row className="justify-content-between">
                    <Col className="col-12 col-lg-7">
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="fw-semibold fs-4 lh-1 pointer bg-gray-hover py-1 rounded-1 me-2 ">
                          {state.profile.name} {state.profile.surname} 
                          
                        </span>
                        <Button className="py-0 mt-2 bg-transparent btn-add-language fs-7">
                          <i className="bi bi-shield-check me-1"></i>Verifica
                          ora
                        </Button>
                      </div>
                      <p className="mb-2 mt-2 lh-1">{state.profile.title}</p>
                      <a
                        href="#"
                        className="d-block d-lg-none fs-7 text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                        id="università"
                      >
                        EPICODE
                      </a>
                      <p className="text-secondary fs-7 m-0 mt-2">
                        {state.profile.area}
                        <span>
                          <i className="bi bi-dot"></i>
                        </span>
                        <a
                          href="#"
                          className="fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                          onClick={() => {
                            setShow(true);
                          }}
                        >
                          Informazioni di contatto
                        </a>
                      </p>
                    </Col>
                    <Col className="col-4 p-0 d-none d-lg-block">
                     
                    </Col>
                  </Row>
                  <Row className="mt-2 g-2 justify-content-start">
                    <Col className="px-1 d-flex flex-wrap">
                      <Button className="rounded-pill py-1 fw-semibold me-2 mb-2 justify-self-stretch flex-grow-1 flex-lg-grow-0">
                        Disponibile per
                      </Button>
                      <Button className="bg-transparent btn-add-language py-1 me-2 mb-2">
                        Aggiungi sezione del profilo
                      </Button>
                      <Button
                        variant="secondary"
                        className="rounded-pill py-1 btn-modal-italiano bg-transparent mb-2"
                      >
                        <span className="text-secondary">Altro</span>
                      </Button>
                    </Col>
                  </Row>
                  <div className="mt-3 card-text">
                    <Row>
                      <Col className="col-12 col-lg-6 col-md-8 pointer">
                        <Card
                          className="py-2 ps-3 pe-2 border-0 fs-7"
                          style={{
                            backgroundColor: "#dde7f1",
                          }}
                        >
                          <span className="fw-semibold position-relative">
                            Disponibile a lavorare
                            <i
                              className="bi bi-pencil position-absolute top-0 end-0 text-secondary fs-6 pointer bg-darkgray-hover rounded-circle d-flex justify-content-center align-items-center"
                              style={{
                                height: "30px",
                                width: "30px",
                              }}
                            ></i>
                          </span>

                          <p className="m-0">Ruoli di Sviluppatore front-end</p>
                          <a
                            href="#"
                            className="fs-7 fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                            id="università"
                          >
                            Mostra dettagli
                          </a>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
              {/*Modale informazioni di contatto con dati profilo recuperati da database */}
              <Modal show={show} onHide={() => setShow(false)} className="mt-5">
                <Modal.Header closeButton>
                  <Modal.Title className="fs-5 px-2">
                    {state.profile.name} {state.profile.surname}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-fluid">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="ms-2 mb-0 fw-normal">
                      Informazioni di contatto
                    </h5>
                    <i
                      className="bi bi-pencil text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        height: "40px",
                        width: "40px",
                      }}
                    ></i>
                  </div>
                  <Row className="px-2 mb-3">
                    <Col xs={1}>
                      <i className="fa-brands fa-linkedin fs-4 pt-1"></i>
                    </Col>
                    <Col xs={11}>
                      <p className="mb-0 fw-semibold">Il tuo profilo</p>
                      <Link
                        to={`/profile/${state.profile._id}`}
                        className="fs-7 fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                      >
                        /profile/{state.profile._id}
                      </Link>
                    </Col>
                  </Row>
                  <Row className="px-2 mb-3">
                    <Col xs={1}>
                      <i className="fa-regular fa-envelope fs-5 pt-1"></i>
                    </Col>
                    <Col xs={11}>
                      <p className="mb-0 fw-semibold">Email</p>
                      <a
                        href="#"
                        className="fs-7 fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                      >
                        {state.profile.email}
                      </a>
                    </Col>
                  </Row>
                  <Row className="px-2 mb-3">
                    <Col xs={1}>
                      <i className="fa-solid fa-circle-info fs-5 pt-1"></i>
                    </Col>
                    <Col xs={11}>
                      <p className="mb-0 fw-semibold">Bio</p>
                      <p className="m-0 fs-7 fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                        {state.profile.bio}
                      </p>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <Spinner variant="primary"></Spinner>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProfileSection;
