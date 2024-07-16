import React, { Component } from "react";
import NavbarComponent from "../../component/NavbarComp/NavbarComp";
import Karakter from "../Karakter/Karakter";
import KarakterDetail from "../Karakter/KarakterDetail";
import CharacterByLocation from "../../component/Location/CharacterByLocation";
import LocationDetailPage from "../../component/Location/LocationDetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RootProvider } from "../RootContext";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Router>
          <NavbarComponent />
          <RootProvider>
            <Routes>
              <Route path="/" Component={Karakter} />
              <Route path="/character/:id" Component={KarakterDetail} />
              <Route path="/location" Component={CharacterByLocation} />
              <Route
                path="/location/:locationName"
                Component={LocationDetailPage}
              />
            </Routes>
          </RootProvider>
        </Router>
      </div>
    );
  }
}

export default Home;
