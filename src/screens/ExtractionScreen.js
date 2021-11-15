import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreateExtraction from "../components/CreateExtraction";
import LoggedNavbar from "../components/LoggedNavbar";
import UnloggedNavbar from "../components/UnloggedNavbar";


function ExtractionScreen() {
    
  return (
      <div className="container">
        <LoggedNavbar />
        <br/>
        <CreateExtraction/>
      </div>
  );
}

export default ExtractionScreen;
