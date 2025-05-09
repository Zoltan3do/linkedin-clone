/* eslint-disable react/prop-types */
import { Card, Button } from 'react-bootstrap';
import { BsTrash3 } from "react-icons/bs";

const HomeAppointmentsList = ({ appointments = [], deleteAppointment }) => {
    return (
        <div className="mt-4">
            <h3 className='text-primary'>I tuoi impegni</h3>

            {appointments.length === 0 ? (
                <p>Non ci sono impegni.</p>
            ) : (
                <div>
                    {appointments.map((appointment, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Card.Title>{appointment.eventName}</Card.Title>
                                    <Card.Text>
                                        Inizio: {appointment.startDate} alle {appointment.startTime} <br />
                                        Fine: {appointment.endDate} alle {appointment.endTime} <br />
                                        Descrizione: {appointment.description}
                                    </Card.Text>
                                </div>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => deleteAppointment(index)}
                                >
                                   <BsTrash3 />
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomeAppointmentsList;


