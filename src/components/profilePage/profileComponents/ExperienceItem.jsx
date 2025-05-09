import { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const ExperienceItem = ({ company, logo, role, duration, location, description, fullDescription }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <Row className="experience-item mb-4">
      <Col xs={2} md={1}>
        <Image src={logo} alt={`${company} logo`} fluid className="company-logo" />
      </Col>
      <Col xs={10} md={11}>
        <h3 className="company-name mb-0">{company}</h3>
        <p className="role mb-0">{role}</p>
        <p className="duration text-muted mb-0">{duration}</p>
        <p className="location text-muted mb-2">{location}</p>
        <p className="description mb-1">
          {expanded ? fullDescription : description}
        </p>
        <a href="javascript:void(0)" className="see-more text-primary" onClick={toggleDescription}>
          {expanded ? 'See less' : '...see more'}
        </a>
      </Col>
    </Row>
  );
};

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
};

export default ExperienceItem;