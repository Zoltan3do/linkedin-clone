import Card from 'react-bootstrap/Card'

const Analysis = () => {
  return (
    <Card className="my-2">
      <Card.Body className="ms-2">
        <div className="mb-3">
          <h5>Analisi</h5>
          <p>
            <i className="bi bi-eye-fill me-2"></i>
            Solo per te
          </p>
        </div>
        <div className="card-text">
          <div className="d-flex">
            <span>
              <i className="bi bi-people-fill me-2"></i>
            </span>
            <div>
              <p>Visualizzazioni del profilo</p>
              <p>Aggiorna il tuo proflo per attrarre visitatori</p>
            </div>
          </div>
        </div>
      </Card.Body>
      <a className="text-decoration-none" href="#">
        <div className="d-flex justify-content-center border-top p-2 link-dark text-decoration-none mtlr text-secondary ">
          Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
        </div>
      </a>
    </Card>
  )
}

export default Analysis
