import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllSideProfiles from "./components/AllSideProfiles";
import SingleProfile from "./components/SingleProfile";

import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar/MyNavbar";
import { useState } from 'react';
import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound/NotFound";
import JobsFinder from "./components/jobs/JobsFinder";
import Messaging from "./components/Messaging";


const App = () => {
  const [, setIsScrollFromChild] = useState(false);
  const [onUserChange, setOnUserChange] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleScrollChange = (newScrollState) => {
    setIsScrollFromChild(newScrollState);
  };

  const handleUserChange = (newUser) => {
    setOnUserChange(newUser);
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  }

  return (

    <BrowserRouter>
      <header>
        <MyNavbar
          onScrollChange={handleScrollChange}
          onUserProfileChange={handleUserChange}
          onSearchChange={handleSearchChange}
        />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <main >
              <Profile />
              <MyFooter />
            </main>
          }
        />
        <Route path="/allsideprofiles" element={<AllSideProfiles />} />
        <Route path="/profile/:profileId" element={<SingleProfile />} />
        <Route path="/home" element={
          <Home userProfile={onUserChange} ></Home>
        } />
        <Route path="/jobs" element={
          <Jobs userProfile={onUserChange}></Jobs>
        } />
        <Route path="*" element={
          <NotFound />
        } />
        <Route path="/jobs-finder" element={<JobsFinder searchQuery={searchQuery} />} />
        <Route path="/Messaging" element={<Messaging></Messaging>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
