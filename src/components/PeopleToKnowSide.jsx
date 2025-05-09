import { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { fetchSingleProfile } from "../redux/actions/homePostAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import token from "./tooken.json";

// L'URL dell'API per ottenere i profili
const urlAPI = "https://striveschool-api.herokuapp.com/api/profile/";

const PeopleToKnowSide = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Stato per tracciare quali utenti sono collegati

  // Funzione per randomizzare i profili
  const shuffleProfiles = (profilesArray) => {
    return profilesArray.sort(() => Math.random() - 0.5);
  };

  // la fetch dei profili
  const fetchProfiles = async () => {
    try {
      const response = await fetch(urlAPI, {
        headers: {
          Authorization:
            token.AUTH,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
      }
      const data = await response.json();
      console.log("Dati dei profili:", data);
      setProfiles(shuffleProfiles(data)); // Randomizza i profili
      setLoading(false);
    } catch (error) {
      console.error("Errore:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funzione per alternare tra "Collegati" e "In sospeso"
  const toggleConnect = (profileId) => {
    setConnected((prevState) => ({
      ...prevState,
      [profileId]: !prevState[profileId], // Alterna tra true e false
    }));
  };

  const handleProfileClick = (profileId) => {
    dispatch(fetchSingleProfile(profileId));
    navigate(`/profile/${profileId}`);
  };
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="side-profiles my-4">
      <h5 className="text-start">Persone che potresti conoscere</h5>
      {profiles.slice(0, 5).map((profile) => (
        <Card key={profile._id} className="mb-1 p-1">
          <Card.Body className="d-flex align-items-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="profile-img rounded-circle"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <div>
              <Card.Title
                style={{ fontSize: "1rem", cursor: "pointer" }}
                onClick={() => handleProfileClick(profile._id)}
              >
                {profile.name} {profile.surname}
              </Card.Title>
              <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                {profile.title} | {profile.area}
              </Card.Text>
            </div>
          </Card.Body>

          <div className="d-flex justify-content-center">
            {!connected[profile._id] ? (
              <Button
                variant="outline-secondary"
                className="m-2 rounded-5 border-2 text-black fw-5 w-75 d-flex justify-content-center align-items-center"
                onClick={() => toggleConnect(profile._id)} // Mostra bottone "Collegati"
              >
                <IoIosPersonAdd className="me-1" />
                Collegati
              </Button>
            ) : (
              <Button
                variant="outline-secondary"
                className="m-2 rounded-5 border-2 text-black fw-5 w-75 d-flex justify-content-center align-items-center"
                onClick={() => toggleConnect(profile._id)} // Alterna tra "Collegati" e "In sospeso"
              >
                <FaRegClock className="me-1" />
                In sospeso
              </Button>
            )}
          </div>
        </Card>
      ))}
      <div className="border border-1 rounded-2">
        <Button
          variant="link"
          className="text-dark fw-bold text-decoration-none btn-all-profile bg-light w-100"
        >
          Mostra tutto
        </Button>
      </div>
    </div>
  );
};

export default PeopleToKnowSide;
