import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { modPost } from "../redux/actions/ProfileSection";
import token from "./tooken.json";

const ModifyActivitiesModal = (post) => {
  const API_KEY = token.AUTH
  const endPoint = `https://striveschool-api.herokuapp.com/api/posts/${post.id}`;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const originalActivities = {
    id: post.id,
    text: post.text,
    username: post.username,
  };
  const [object, setObject] = useState(originalActivities);

  const modifyActivities = async () => {
    try {
      const res = await fetch(endPoint, {
        method: "PUT",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      if (res.ok) {
        setShow(false);
        console.log("Modificato", object);
      } else {
        throw new Error(
          `${res.status} - Errore nella fetch (modifica esperienza)`
        );
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyActivities();
    dispatch(modPost(object));
    setShow(false);
  };

  return (
    <>
      <i
        className="bi bi-pencil text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
        style={{
          height: "40px",
          width: "40px",
        }}
        onClick={() => setShow(true)}
      ></i>
      <Modal
        size="lg"
        show={show}
        centered
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Modifica post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col
                xs={12}
                sm={9}
                lg={10}
                className="mt-3 text-sm-start mt-sm-0 ps-0 d-flex align-items-center justify-content-center justify-content-sm-start"
              >
                <h5>Username: {post.username}</h5>
              </Col>
            </Row>
            <Row className="mt-4 mb-4">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  as="textarea"
                  style={{ height: "200px", border: "none" }}
                  value={object.text}
                  onChange={(e) =>
                    setObject({
                      ...originalActivities,
                      text: e.target.value,
                    })
                  }
                />
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Annulla
                </Button>
                <Button variant="primary" type="submit">
                  Salva modifiche
                </Button>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModifyActivitiesModal;
