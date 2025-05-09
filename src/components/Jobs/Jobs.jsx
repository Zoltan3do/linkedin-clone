/* eslint-disable react/prop-types */
import { useEffect, useState, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleJob from "./SingleJob";
import FooterHome from "../FooterHome";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
// import { useSelector } from "react-redux";

const Jobs = ({ userProfile }) => {
    const [position, setPosition] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const profile = useSelector(state => state.profile);
    // const [profilo, setProfilo] = useState(profile);
    // console.log(profilo)

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "https://strive-benchmark.herokuapp.com/api/jobs"
                );
                if (response.ok) {
                    const res = await response.json();
                    const job = res.data;
                    console.log(job);
                    setPosition(job);
                } else {
                    console.log("Qualcosa è andato storto durante il recupero dei dati");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <Suspense fallback={<p>Caricamento ...</p>}>
            <Container>
                <Row className="">
                    <Col md={3} sm={12}>
                        <LeftSidebar userProfile={userProfile}></LeftSidebar>
                    </Col>
                    <Col md={6} sm={12}>
                        <div style={{ marginTop: "100px" }} className="d-flex flex-column align-items-between ms-3">
                            <h4 className="mb-0">Le principali offerte di lavoro per te</h4>
                            <p className="text-secondary">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
                            {isLoading ? (<>
                                <p>Caricamento ...</p>
                                <p style={{ height: "100vh" }}></p>
                            </>
                            ) : (
                                <Row md={1} xs={1} style={{ flexWrap: "wrap" }}>
                                    {position &&
                                        position.slice(0, 15).map((job) => (
                                            <SingleJob job={job} key={job._id} />
                                        ))}
                                </Row>
                            )}
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div style={{marginTop:"100px"}}>
                            <FooterHome></FooterHome>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Suspense>
    );
};

export default Jobs;