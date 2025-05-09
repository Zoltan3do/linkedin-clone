/* eslint-disable react/prop-types */
import { Card, ListGroup, Row } from "react-bootstrap";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./leftSidebar.css";



const LeftSidebar = ({ userProfile }) => {
    return (
        <>
            <Row style={{ marginLeft: "0px", marginTop: "100px" }}>
                <Card>
                    <Card.Header className="text-center" style={{ height: "3rem" }}>
                        <img
                            className="profile-image-posts"
                            alt="Profile image"
                            src={userProfile.image}
                        />
                    </Card.Header>
                    <Card.Title className="text-center mt-5">
                        <Link to="/" className="text-dark text-decoration-none" >
                            {userProfile.name} {userProfile.surname}
                        </Link>
                    </Card.Title>
                    <Card.Text className="text-secondary text-center">
                        <p>{userProfile.bio}</p>
                    </Card.Text>
                    <ListGroup variant="flush" className="d-flex py-3">
                        <div className="d-flex align-items-center">
                            <p className="text-secondary">Visitatori del profilo</p>
                            <p className="num_post">681</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="text-secondary ptl-1">Collegamenti</p>
                            <p className="num_post">186</p>
                        </div>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <div className="d-flex flex-column">
                            <p className="pl-3 pt-1 mt-2 text-secondary">
                                Raggiungi i tuoi obiettivi di carriera con Premium
                            </p>
                            <p className="pl-5 pt-1 text-dark fw-semibold">
                                <i className="bi bi-award-fill text-warning"></i>Prova per 0 EUR
                            </p>
                        </div>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <div className="d-flex py-3">
                            <BsBookmarkFill className="saved" />
                            <p className="pl-2 fw-semibold">Elementi salvati</p>
                        </div>
                    </ListGroup>
                </Card>
            </Row>
        </>
    );
};

export default LeftSidebar;
