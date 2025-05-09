/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Jobs.css";


const SingleJob = ({ job }) => {
    return (
        <Card className="card mr-3 mb-3">
            <Card.Body>
                <Link className="jobtitle mt-2 text-decoration-none fw-semibold fs-5" to={`/jobs-finder?search=${job.title}`}>
                    {job.title}
                    <span>&nbsp;
                        <small>({job.job_type})</small>
                    </span>
                </Link>
                <Link to={`/${job.company_name}`} className="text-decoration-none">
                    <Card.Subtitle className="mt-2  text-dark">
                        {job.company_name}
                    </Card.Subtitle>
                </Link>
                <Card.Text className="mb-0">{job.candidate_required_location}</Card.Text>
                <Card.Text >
                    <small className="ml-1">Selezione attiva</small>
                </Card.Text>
                <Card.Text>{job.publication_date}</Card.Text>
            </Card.Body>
        </Card>
    );
};
export default SingleJob;