import { useState, useEffect } from "react";
import { Card, Button} from "react-bootstrap";
import token from "./tooken.json";


const urlAPI = "https://striveschool-api.herokuapp.com/api/profile/";

const JobsCard = () => {
  const [agencies, setAgencies] = useState([]);
  const [profiles, setProfiles] = useState([]);

  // fetch del JSON delle agenzie
  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await fetch("/jobs.json");
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        const data = await response.json();
        console.log("jobs", data);
        setAgencies(data);
      } catch (error) {
        console.error("Errore nel recupero dati json", error);
      }
    };

    // Fetch persone dall'API
    const fetchProfiles = async () => {
      try {
        const response = await fetch(urlAPI, {
          headers: {
            Authorization:
              token.AUTH,
          },
        });
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Errore durante il caricamento delle persone:", error);
      }
    };

    fetchAgencies();
    fetchProfiles();
  }, []);

  // Selezione casuale delle agenzie
  const getRandomAgencies = () => {
    const shuffled = agencies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2); // Ritorna due agenzie casuali
  };

  // Seleziona casualmente 3 persone
  const getRandomFollowers = () => {
    if (profiles.length === 0) return []; // Ritorna un array vuoto se non ci sono profili
    const shuffledProfiles = profiles.sort(() => 0.5 - Math.random());
    return shuffledProfiles.slice(0, 3); // Prende 3 persone casuali
  };

  const selectedAgencies = getRandomAgencies();

  return (
    <div>
      <h5>Potrebbe interessarti</h5>
      <p>Pagine per te</p>
      {selectedAgencies.map((agency, index) => (
        <Card key={index} className="mb-1 p-1">
          <Card.Body>
            <div  className="jobCard">
            <Card.Img
              variant="top"
              src={agency.image}
              className="job-advertising"
            />
            <Card.Title className="text-end job-title">{agency.name}</Card.Title>
            <Card.Text  className="text-end">{agency.description}</Card.Text>
            <Card.Text  className="text-end">{agency.followers.toLocaleString()} follower</Card.Text>
         </div>
            <div>
              <strong>3 collegamenti seguono questa pagina</strong>
              <div className="d-flex justify-content-center">
              {getRandomFollowers().map((person, idx) => (
                <div key={idx} className="py-1" >
                  <div className="overflow-hidden" style={{
                    height:"35px",
                      width: "35px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    
                    }}>
                  <img
                  className="w-100"
                    src={person.image}
                    alt={person.name}
                 
                  />
                  </div>
                 
                </div>
              ))}
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <Button variant="outline-secondary" 
              className="m-2 rounded-5 border-2 text-black fw-5 w-50">+ Segui</Button>
              </div>
          </Card.Body>
      
        </Card>
        
      ))}
          <Button
          variant="link"
          className="text-dark fw-bold text-decoration-none btn-all-profile bg-light w-100"
        >
          Mostra tutto
        </Button>
    </div>
  );
};

export default JobsCard;
