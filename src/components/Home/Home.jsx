/* eslint-disable react/prop-types */
import "./home.css";
import HomeRightSide from "../HomeRightSide.jsx"
import LeftSidebar from "../LeftSidebar/LeftSidebar.jsx"
import { Container, Row, Col } from "react-bootstrap";
import AllPosts from "./AllPosts.jsx";
import HomeCreatePost from "../HomeCreatePost.jsx";

function Home({ userProfile }) {
    return (
        <Container>
            <Row>
                <Col md={3} sm={12}>
                    <LeftSidebar userProfile={userProfile}></LeftSidebar>
                </Col>
                <Col md={6} sm={12}>
                    <div style={{ marginTop: "100px" }}>
                        <HomeCreatePost />
                        <AllPosts ></AllPosts>
                    </div>

                </Col>
                <Col md={3} sm={12}>
                    <HomeRightSide></HomeRightSide>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;