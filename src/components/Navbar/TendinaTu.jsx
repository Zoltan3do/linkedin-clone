/* eslint-disable react/prop-types */
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TendinaTu.css"

function TendinaTu({ dati }) {
    return (
        <ListGroup className="custom-list-group">
            <ListGroup.Item className="custom-list-group-item">
                <div className="d-flex align-items-center">
                    <div className="profile-pic-container" style={{ width: "16%", height: "16%" }}>
                            <img src={dati.image} alt="profile" className="profile-pic w-100" />
                    </div>
                    <div className="ms-3 no-space">
                        
                        <h5>{dati.name} {dati.surname}</h5>
                        <p>{dati.bio}</p>
                    </div>
                </div>
                <div>
                    <Button className="w-100 py-0 border border-primary bg-light text-primary fw-semibold rounded rounded-5"><Link to="/" className="text-decoration-none">Visualizza profilo</Link></Button>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="custom-list-group-item">
                <h5>Account</h5>
                <p className="my-0"><a href="#" className="text-secondary overLink">Impostazioni e privacy</a></p>
                <p className="my-1"><a href="#" className="text-secondary overLink">Guida</a></p>
                <p className="my-0"><a href="#" className="text-secondary overLink">Lingua</a></p>
            </ListGroup.Item>
            <ListGroup.Item className="custom-list-group-item">
                <h5>Gestisci</h5>
                <p className="my-0"><a href="#" className="text-secondary overLink">Post e attività</a></p>
                <p className="my-1 truncate-text"><a href="#" className="text-secondary overLink">Account per la pubblicazione di offerte di lavoro</a></p>
                <p className="my-0"><a href="#" className="text-secondary overLink">Lingua</a></p>
            </ListGroup.Item>
            <ListGroup.Item className="custom-list-group-item overLink">
                <p className="my-0"><a href="#" className="text-secondary overLink">Esci</a></p>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default TendinaTu;
