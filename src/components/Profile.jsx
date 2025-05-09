import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfileSection from './ProfileSection'
import Suggestions from './Suggestions'
import Analysis from './Analisys'
import Resources from './Resources'
import Activities from './Activities'
import Professional from './Professional'
import MainSidebar from './MainSidebar'
import ExperienceCard from './profilePage/profileComponents/ExperienceCard'
import token from "./tooken.json";



import { myProfile } from "../redux/actions/ProfileSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Experiences from './Experience'

const Profile = () => {
  const dispatch = useDispatch();
  const API_KEY =
    token.AUTH;

  useEffect(() => {
    dispatch(myProfile(API_KEY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = useSelector((state) => state.profile);
  console.log('state',state._id)

  console.log('profile',state.profile)
  return (

    <>
   
      <Container>
        <Row>
          <Col xs={12} md={7} lg={8} xl={9}>
            <ProfileSection />
            <Suggestions />
            <Analysis />
            <Resources />
            <Activities />
            <Professional />
            <Experiences userId={state.profile?._id} canEdit={true}  />
          </Col>
          <Col xs={12} md={5} lg={4} xl={3}>
            <MainSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
