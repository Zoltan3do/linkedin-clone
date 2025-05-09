import { Button, Card } from 'react-bootstrap'
import Suggestions from './Suggestions'

const Carousel = () => {
  const cards = [
    
    <>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              Condividi la tua posizione lavorativa più recente
            </Card.Title>
            <Card.Text className="mb-2 text-muted">
              Aggiungendo il tuo ruolo attuale al profilo aiuterai i recruiter a
              trovarti.
            </Card.Text>

            <Button className="suggestions-button">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      ,
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              Condividi la tua posizione lavorativa più recente
            </Card.Title>
            <Card.Text className="mb-2 text-muted">
              Aggiungendo il tuo ruolo attuale al profilo aiuterai i recruiter a
              trovarti.
            </Card.Text>

            <Button className="suggestions-button">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      ,
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              Condividi la tua posizione lavorativa più recente
            </Card.Title>
            <Card.Text className="mb-2 text-muted">
              Aggiungendo il tuo ruolo attuale al profilo aiuterai i recruiter a
              trovarti.
            </Card.Text>

            <Button className="suggestions-button">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      ,
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              Condividi la tua posizione lavorativa più recente
            </Card.Title>
            <Card.Text className="mb-2 text-muted">
              Aggiungendo il tuo ruolo attuale al profilo aiuterai i recruiter a
              trovarti.
            </Card.Text>

            <Button className="suggestions-button">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      ,<div>Card 5</div>,<div>Card 6</div>,
    </>,
  ]

  return <Suggestions cards={cards} />
}
export default Carousel
