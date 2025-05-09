import { useState, useEffect } from "react";
import { Button, Card, Badge,Col } from "react-bootstrap";

const AdvertisingSide = () => {
  const [ads, setAds] = useState([]);
  const [randomAd, setRandomAd] = useState(null);

  // Funzione per fare fetch del file JSON
  const fetchAds = async () => {
    try {
      const response = await fetch("/advertising.json"); // Percorso del file JSON nella cartella public
      if (!response.ok) {
        throw new Error("Errore nella risposta del server");
      }
      const data = await response.json();
      setAds(data);
    } catch (error) {
      console.error("Errore nel recupero dati json", error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  useEffect(() => {
    if (ads.length > 0) {
      const randomIndex = Math.floor(Math.random() * ads.length);
      setRandomAd(ads[randomIndex]);
    }
  }, [ads]);

  // Funzione per aprire il link al click del pulsante
  const handleFollowClick = (url) => {
    window.open(url, "_blank"); // Apre il link in una nuova scheda
  };

  if (!randomAd) return null;

  return (
    <Col>
    <Card className="mb-1 p-2 rounded-2">
      <div className="bg-advertising">
      <Badge bg="light" text="secondary" className="border border-1 adv-badge">
        Promosso<a href="">...</a>
      </Badge>
      </div>
      <Card.Img
        variant="top"
        src={randomAd.logoUrl}
        alt={randomAd.company}
        className="logo-advertising"

      />
      <Card.Body className="mt-2 pt-0 pb-2 px-0">
        <Card.Title className="text-start mb-0">{randomAd.company}</Card.Title>
        <Card.Text className="text-start mb-0">{randomAd.message}</Card.Text>
        <Card.Text className="text-start"><small className="mb-0">Rimani al corrente con news e informazioni rilevanti </small></Card.Text>
        <div className="d-flex justify-content-center">
        <Button
          className="adv-btn rounded-5 fw-bold px-3"
          variant="outline-primary"
          onClick={() => handleFollowClick(randomAd.url)} // Gestione del click
        >
          {randomAd.cta}
        </Button>
        </div>
    
      </Card.Body>
    </Card>
    </Col>
  );
};

export default AdvertisingSide;
