/* eslint-disable react/prop-types */
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { addPost } from "../redux/actions/ProfileSection";
import token from "./tooken.json";

const PostModal = ({ show, hide }) => {
  const API_KEY = token.AUTH;
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.profile);
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization: `${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(addPost({ text, ...data }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setText("");
    setImage(null);
    hide();
  };

  return (
    <>
      {state.profile && (
        <Modal
          size="lg"
          show={show}
          onHide={hide}
          centered
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Crea un post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col
                  xs={12}
                  sm={3}
                  lg={2}
                  // xxl={1}
                  className="d-flex justify-content-center ps-0 p-sm-1 text-sm-start pe-0  "
                >
                  <img
                    src={state.profile.image}
                    alt="profilo"
                    style={{ width: "5em" }}
                    className=" border rounded-circle border-white "
                  />
                </Col>
                <Col
                  xs={12}
                  sm={9}
                  lg={10}
                  // xxl={11}
                  className=" mt-3 text-sm-start mt-sm-0 ps-0 d-flex align-items-center justify-content-center justify-content-sm-start  "
                >
                  <h5>
                    {state.profile.name} {state.profile.surname}
                  </h5>
                </Col>
              </Row>
              <Row className="mt-4 mb-4">
                <Form.Control
                  as="textarea"
                  placeholder="Di cosa vorresti parlare?"
                  style={{ height: "200px", border: "none" }}
                  value={text}
                  onChange={handleChange}
                />
              </Row>
              <Row>
                <div>
                  <Button className="border-0  bg-transparent mb-2 ">
                    <i
                      style={{ color: "black", fontSize: "20px" }}
                      className="bi bi-emoji-smile "
                    ></i>
                  </Button>
                </div>
              </Row>
              <Row>
                <Col>
                  <Button className="me-3 border-0 rounded-circle addpost-btn mt-2 mt-sm-0">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <i
                        style={{ color: "black", fontSize: "20px" }}
                        className="bi bi-card-image"
                      ></i>
                    </label>
                  </Button>
                  <Button className="me-3 border-0 rounded-circle addpost-btn mt-2 mt-sm-0">
                    <i
                      style={{ color: "black", fontSize: "20px" }}
                      className="bi bi-calendar3"
                    ></i>
                  </Button>

                  <Button className="me-3 border-0 rounded-circle addpost-btn mt-2 mt-sm-0">
                    <i
                      style={{ color: "black", fontSize: "20px" }}
                      className="bi bi-filter-circle"
                    ></i>
                  </Button>
                  <Button className="me-3 border-0 rounded-circle addpost-btn mt-2 mt-sm-0">
                    <i
                      style={{ color: "black", fontSize: "20px" }}
                      className="bi bi-three-dots"
                    ></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <i style={{ fontSize: "20px" }} className="bi bi-clock me-3 "></i>{" "}
            <Button
              variant="primary"
              onClick={handleClick}
              className="border-0 btn-public"
            >
              Pubblica
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default PostModal;
