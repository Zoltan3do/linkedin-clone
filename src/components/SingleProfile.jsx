import {

  Card,
  Col,
  Row,
  Spinner,
  Container,
} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProfile } from "../redux/actions/homePostAction";
import ImageUploadProfile from "./UploadImageProfile";
import Analysis from "./Analisys";
import Resources from "./Resources";
import Professional from "./Professional";
import SidebarProfile from "./SidebarProfile";
import AdvertisingSide from "./AdvertisingSide";
import PeopleToKnowSide from "./PeopleToKnowSide";
import JobsCard from "./JobsCard";
import AdvImg from "./AdvImg";
import Experiences from "./Experience";
import MyFooter from "./myFooter"

const SingleProfile = () => {
  const { profileId } = useParams(); // Ottieni l'ID del profilo dalla URL
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.singleProfile);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(fetchSingleProfile(profileId));
  }, [dispatch, profileId]);

  if (loading || !profile) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container style={{ marginTop: "80px" }}>
      <Row>
        <Col xs={12} md={7} lg={8} xl={9}>
          <Card>
            <Card.Header className="p-0">
              <div className="position-relative">
                <div className="hero"></div>
                <div className="position-absolute z-index-1 propic-container">
                  <img
                    src={profile.image}
                    alt="propic"
                    className="border border-3 rounded-circle border-white pointer w-100 h-100 objectfit-cover"
                  />
                </div>
                <ImageUploadProfile />
              </div>
            </Card.Header>
            <Card.Body className="px-4 pb-4 pt-0 mt-5">
              {/* Altre informazioni del profilo */}
            </Card.Body>
          </Card>

          <Analysis />
          <Resources />
          <Professional />
          {/* Passiamo l'ID del profilo e canEdit=false per disabilitare l'editing */}
          <Experiences userId={profileId} canEdit={false} />
        </Col>

        <Col xs={12} md={5} lg={4} xl={3}>
          <SidebarProfile />
          <AdvertisingSide />
          <PeopleToKnowSide />

          <JobsCard />
          <AdvImg />
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
};

export default SingleProfile;
