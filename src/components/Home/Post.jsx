/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Card, Image, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


const Post = ({
    post,
    handleEdit,
    handleDelete,
    image,
    name,
    surname,
    title,
    text,
    id,
}) => {
    const { pathname } = useLocation();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <>
            <Card
                style={{ borderRadius: "7px" }}
                className="mb-2 "
            >
                <Card.Body>
                    <div className="d-flex flex-row ">
                        <Image
                            style={{ width: "60px", borderRadius: "50%" }}
                            src={pathname === "/home" ? post.user.image : image}
                            alt="profile picture of" className="me-3"
                        />

                        <span className="d-flex flex-column">
                            <Link
                                to={
                                    pathname === "/home"
                                        ? `/profile/${post.user._id}`
                                        : `/profile/${id}`
                                } className="text-decoration-none"
                            >
                                <Card.Title className="text-dark">
                                    {pathname === "/home" ? post.user.name : name}
                                    {pathname === "/home" ? post.user.surname : surname}
                                </Card.Title>
                            </Link>
                            <Link
                                to={
                                    pathname === "/home"
                                        ? `/profile/${post.user._id}`
                                        : `/profile/${id}`
                                } className="text-decoration-none"
                            >
                                <Card.Subtitle className="mb-2 text-secondary">
                                    {pathname === "/home" ? post.user.title : title}
                                </Card.Subtitle>
                            </Link>
                        </span>
                        {pathname === "/home" && (
                            <div className="d-flex align-items-center ms-auto ">
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex justify-content-center align-items-center " variant="transparent"
                                        bsPrefix="custom-dropdown-toggle">
                                        <i
                                            className="bi bi-three-dots"
                                            onClick={() => handleEdit(post._id)}
                                            style={{ marginRight: '10px', cursor: 'pointer' }}
                                        ></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item href="#">Salva</Dropdown.Item>
                                        <Dropdown.Item href="#">Segnala</Dropdown.Item>
                                        <Dropdown.Item className="ms-auto"
                                            variant="outline-danger"
                                            onClick={() => handleDelete(post._id)} // Chiamo handleDelete con l'ID del post
                                            size="sm">Elimina</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        )}
                    </div>
                    <Link
                        to={
                            pathname === "/home" ? `/profile/${post.user._id}` : `/profile/${id}`
                        }
                    ></Link>
                    <Card.Text style={{ marginTop: "3%", marginLeft: "2%" }}>
                        {pathname === "/home" ? post.text : text}
                    </Card.Text>
                </Card.Body>
                <hr className="my-1" />
                <Row className="text-secondary justify-content-center">
                    <Col
                        xs="2"
                        className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                    >
                        <i className="bi bi-hand-thumbs-up"></i>&nbsp;
                        <p className="mb-0 ml-2 text-primary">Consiglia</p>
                    </Col>
                    <Col
                        xs="2"
                        className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                    >
                        <i className="bi bi-chat-right-text"></i>&nbsp;
                        <p className="mb-0 ml-2">Commenta</p>
                    </Col>
                    <Col
                        xs="2"
                        className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                    >
                        <i className="bi bi-arrow-90deg-right"></i>&nbsp;
                        <p className="mb-0 ml-2">Condividi</p>
                    </Col>
                    <Col
                        xs="2"
                        className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                    >
                        <i className="bi bi-send"></i>&nbsp;
                        <p className="mb-0 ml-2">Invia</p>
                    </Col>
                </Row>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <img src={post.image} className="w-100" alt="" />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Post;