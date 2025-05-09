import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import './JobsFinder.css';
import PropTypes from 'prop-types';

const JobsFinder = ({ searchQuery }) => {
  const [jobListings, setJobListings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchFilter, setSearchFilter] = useState('default');
  const [currentQuery, setCurrentQuery] = useState('');
  const location = useLocation();
  const jobDetailsRef = useRef(null);
  const jobListingsRef = useRef(null);

  useEffect(() => {
    if (searchQuery) {
      setCurrentQuery(searchQuery);
      fetchJobs(searchQuery, searchFilter);
    } else {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('search');
      if (query) {
        setCurrentQuery(query);
        fetchJobs(query, searchFilter);
      }
    }
  }, [location, searchQuery, searchFilter]);

  useEffect(() => {
    adjustJobListingsHeight();
    window.addEventListener('resize', adjustJobListingsHeight);
    return () => window.removeEventListener('resize', adjustJobListingsHeight);
  }, [selectedJob]);

  const adjustJobListingsHeight = () => {
    if (jobDetailsRef.current && jobListingsRef.current) {
      const detailsHeight = jobDetailsRef.current.offsetHeight;
      jobListingsRef.current.style.height = `${Math.max(detailsHeight, window.innerHeight - 250)}px`;
    }
  };

  const fetchJobs = async (query, filter) => {
    let url = '';
    switch (filter) {
      case 'company':
        url = `https://strive-benchmark.herokuapp.com/api/jobs?company=${encodeURIComponent(query)}`;
        break;
      case 'category':
        url = `https://strive-benchmark.herokuapp.com/api/jobs?category=${encodeURIComponent(query)}&limit=10`;
        break;
      default:
        url = `https://strive-benchmark.herokuapp.com/api/jobs?search=${encodeURIComponent(query)}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobListings(data.data);
      if (data.data.length > 0) {
        setSelectedJob(data.data[0]);
      }
    } catch (error) {
      console.error('Errore nel recupero dei lavori:', error);
    }
  };

  const handleFilterChange = (filter) => {
    setSearchFilter(filter);
    fetchJobs(currentQuery, filter);
  };

  return (
    <Container fluid className='job-finder-container' style={{ paddingTop: '100px' }}>
      <Row className="mb-3 filter-row">
        <Col>
          <Button variant="outline-secondary" onClick={() => handleFilterChange('default')}>Tutti</Button>
          <Button variant="outline-secondary" className="ms-2" onClick={() => handleFilterChange('company')}>Azienda</Button>
          <Button variant="outline-secondary" className="ms-2" onClick={() => handleFilterChange('category')}>Categoria</Button>
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={4}>
          <Card className="search-results-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Risultati per &quot;{currentQuery}&quot;</h5>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Imposta avviso"
                />
              </div>
              <p className="text-muted">{jobListings.length} risultati</p>
            </Card.Body>
          </Card>
          <div className="job-listings-scroll" ref={jobListingsRef}>
            {jobListings.map(job => (
              <Card 
                key={job._id} 
                className={`mb-2 job-card ${selectedJob && selectedJob._id === job._id ? 'selected' : ''}`}
                onClick={() => setSelectedJob(job)}
              >
                <Card.Body>
                  <div className="d-flex">
                    <div className="job-logo me-3">
                      {/* Placeholder per il logo dell'azienda */}
                      <div className="placeholder-logo"></div>
                    </div>
                    <div>
                      <Card.Title className="job-title">{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                      <Card.Text className="job-location">{job.candidate_required_location}</Card.Text>
                      <div className="job-meta">
                        <Badge bg="secondary" className="me-2">{job.job_type}</Badge>
                        <small className="text-muted">Pubblicato il: {new Date(job.publication_date).toLocaleDateString()}</small>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
        <Col md={7} lg={8}>
          {selectedJob && (
            <Card className="job-details-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <Card.Title className="job-title">{selectedJob.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{selectedJob.company_name}</Card.Subtitle>
                    <Card.Text className="job-location">
                      {selectedJob.candidate_required_location} · Pubblicato il: {new Date(selectedJob.publication_date).toLocaleDateString()}
                    </Card.Text>
                    <Badge bg="secondary" className="me-2">{selectedJob.job_type}</Badge>
                  </div>
                  <div>
                    <Button variant="primary" className="me-2">Candidati</Button>
                    <Button variant="outline-primary">Salva</Button>
                  </div>
                </div>
                <hr />
                <h5>Informazioni sull&apos;offerta di lavoro</h5>
                <Card.Text dangerouslySetInnerHTML={{ __html: selectedJob.description }}></Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

JobsFinder.propTypes = {
  searchQuery: PropTypes.string,
};

export default JobsFinder;
