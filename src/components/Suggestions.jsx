import { Button, Card, Col, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Slider from 'react-slick'

const Suggestions = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <Row>
        <Col className=" d-flex justify-content-center align-item-center">
          <Card>
            <Card.Body>
              <div>
                <Card.Title className="mb-0">Consigliato per te</Card.Title>
                <Card.Text className="mb-2 text-muted fs-7">
                  <i className="bi bi-eye-fill"></i> Solo per te
                </Card.Text>
              </div>
              <div>
                <Card.Subtitle className="mt-3 mb-2">
                  Principiante
                </Card.Subtitle>
                <div className="d-flex align-items-center">
                  <ProgressBar now={15} className="me-2" />
                  <span className="fs-7">2/7</span>
                </div>
                <Card.Text className="mb-2 fs-7">
                  Completa 2 passaggi per raggiungere il livello{' '}
                  <a
                    href="#"
                    className="fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Intermedio
                  </a>
                </Card.Text>
              </div>
              <div className="carousel px-0">
                <Slider {...settings}>
                  <Col className="box px-1">
                    <Card className="bg-body-tertiary">
                      <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                        <div>
                          <Card.Title>
                            Condividi la tua posizione lavorativa più recente
                          </Card.Title>
                          <Card.Text className="mb-2 text-muted">
                            Aggiungendo il tuo ruolo attuale al profilo aiuterai
                            i recruiter a trovarti.
                          </Card.Text>
                        </div>

                        <Button className="suggestions-button mt-3">
                          Aggiungi posizione
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="box px-1">
                    <Card className="bg-body-tertiary">
                      <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                        <div>
                          <Card.Title>In quale settore lavori?</Card.Title>
                          <Card.Text className="mb-2 text-muted">
                            Gli utenti che aggiungono un settore ricevono fino a
                            2,5 volte più visualizzazioni del profilo.
                          </Card.Text>
                        </div>

                        <Button className="suggestions-button mt-3">
                          Aggiungi settore
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="box px-1">
                    <Card className="bg-body-tertiary">
                      <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                        <div>
                          <Card.Title>
                            Aggiungi una foto al tuo profilo per aiutare gli
                            altri a riconoscerti
                          </Card.Title>
                          <Card.Text className="mb-2 text-muted">
                            Gli utenti con una foto del profilo ricevono fino a
                            2,3 volte più visualizzazioni del profilo.
                          </Card.Text>
                        </div>

                        <Button className="suggestions-button mt-3">
                          Aggiungi foto
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="box px-1">
                    <Card className="bg-body-tertiary">
                      <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                        <div>
                          <Card.Title>
                            Quale scuola o università hai frequentato?
                          </Card.Title>
                          <Card.Text className="mb-2 text-muted">
                            Gli utenti che includono una scuola o università
                            ricevono fino a 2,2 volte più visualizzazioni del
                            profilo.
                          </Card.Text>
                        </div>

                        <Button className="suggestions-button mt-3">
                          Aggiungi titolo di studio
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="box px-1">
                    <Card className="bg-body-tertiary">
                      <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                        <div>
                          <Card.Title>
                            Scrivi un riepilogo per mettere in evidenza la tua
                            personalità o la tua esperienza lavorativa
                          </Card.Title>
                          <Card.Text className="mb-2 text-muted">
                            Gli utenti che includono un riepilogo ricevono fino
                            a 3,9 volte più visualizzazioni del profilo.
                          </Card.Text>
                        </div>

                        <Button className="suggestions-button mt-3">
                          Aggiungi un riepilogo
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Slider>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Suggestions
