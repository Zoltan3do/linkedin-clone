import { useEffect, useState } from "react";
import { Col, Card, Button, Dropdown } from "react-bootstrap";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import FooterHome from "./FooterHome";
import token from "./tooken.json";

const HomeRightSide = () => {
  const [userData, setUserData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: token.AUTH,
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Col className="d-flex flex-column" style={{marginTop:"100px"}}>
      <Card className="mb-3">
        <Card.Body>
            <div className="d-flex justify-content-between">
            <Card.Title>LinkedIn Notizie</Card.Title>
            <HiMiniInformationCircle />
            </div>
         
          <Card.Text className="fw-bold text-secondary">Storie principali</Card.Text>
          <ul className="home-side-ul fw-bold">
            <li>I migliori MBA per dare slancio alla tua carriera <small className="text-secondary">-14,701 lettori</small></li>
            <li>Allenare il pensiero strategico <small className="text-secondary">-2,089 lettori</small> </li>
            <li>I lavori più richiesti nei prossimi 5 anni <small className="text-secondary"> -915 lettori</small></li>
            <li>Se AI sale in cattedra<small className="text-secondary">-2,500 lettori</small> </li>
            <li>Arriva il Voucher 3I per l&apos;innovazione <small className="text-secondary"> -905 lettori</small></li>
            {showMore && (
              <>
                <li>Che si dice della Nutella vegana <small className="text-secondary">-445 lettori</small></li>
                <li>Fotogrammi dal Lido <small className="text-secondary">-448 lettori</small> </li>
                <li>Economia e politica a Cernobbio<small className="text-secondary">-336 lettori</small></li>
                <li>Low cost intercontinentale per Wizz Air<small className="text-secondary"> -558 lettori</small> </li>
              </>
            )}
          </ul>
          <Button variant="outline-secondary" className="fw-bold border border-secondary" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Mostra meno" : "Vedi altro "}
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title> I giochi di oggi</Card.Title>
          <Card.Text>
            <div>
            <FaFantasyFlightGames className="text-info me-2"/> 
              <span className="fw-bold">Queens</span>
              <p className="text-secondary">Incorona ogni regione</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 homeSide">
        <Card.Body >
          <div className="d-flex justify-content-between align-items-center ">
            <div className="homeSideDrop"><Dropdown>
              <Dropdown.Toggle variant="light">
             Annuncio
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Azioni</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Impostazioni</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></div>
            <div className="d-flex align-items-center mb-2">
                
              {userData && (
                <img
                  src={userData.image}
                  alt={userData.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
              )}
              <div className="text-center border border-1"  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                     backgroundColor:"#fce0c1"
                  }}>
              <IoBagCheck className="text-primary" />
              <div className="text-primary">
                <p style={{fontSize:"12px",
                   
                }}> Jobs</p>
               
              </div>
              </div>
            </div>
            
          </div>
          <p className="text-secondary">Find a job at a company that needs your help.</p>
          <div className="d-flex justify-content-center">
          <Button variant="outline-primary rounded-5">Search jobs</Button>
          </div>
        </Card.Body>
      </Card>
      <FooterHome />
    </Col>
  );
};

export default HomeRightSide;
