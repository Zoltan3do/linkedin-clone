import { Row} from "react-bootstrap"
import SidebarProfile from "./SidebarProfile"
import AdvertisingSide from "./AdvertisingSide"
import AllSideProfiles from "./AllSideProfiles"
import PeopleToKnowSide from "./PeopleToKnowSide"
import JobsCard from "./JobsCard"
import AdvImg from "./AdvImg"
const MainSidebar = () =>{
    return(
       <Row className="flex-column no-scroll-margin">
     
        <SidebarProfile/>
        <AdvertisingSide/>
        <AllSideProfiles/>
        <PeopleToKnowSide/>
        <JobsCard/>
        <AdvImg/>
       
       </Row>
    )
}
export default MainSidebar