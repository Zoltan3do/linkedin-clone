import { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSingleProfile } from "../redux/actions/homePostAction";
import token from "./tooken.json";

// L'URL dell'API per ottenere i profili
const urlAPI = "https://striveschool-api.herokuapp.com/api/profile/";

const AllSideProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  // La fetch dei profili dall'API
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
      setProfiles(data);
      setLoading(false);
    } catch (error) {
      console.error("Errore:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

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

  const displayedProfiles = path.includes('/profile/')
    ? profiles.reverse().slice(55, 60)
    : profiles.slice(55, 60);

  return (
    <div className="side-profiles">
      <h5 className="mt-3 text-start">Altri profili per te</h5>
      {displayedProfiles.map((profile) => (
        <Card key={profile._id} className="mb-1 p-1">
          <Card.Body className="d-flex align-items-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="profile-img rounded-circle"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <div>
              <Card.Title style={{ fontSize: "1rem" }}>
                {profile.name} {profile.surname}
              </Card.Title>
              <Card.Text
                className="text-muted "
                style={{ fontSize: "0.9rem" }}
              >
                {profile.title} | <br />
                {profile.area}
              </Card.Text>
            </div>
          </Card.Body>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-secondary"
              className="m-2 rounded-5 border-2 text-black fw-5 w-75"
              onClick={() => handleProfileClick(profile._id)}
            >
              Visualizza profilo
            </Button>
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

export default AllSideProfiles;
