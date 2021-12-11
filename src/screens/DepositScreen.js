import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreateDeposit from "../components/CreateDeposit";
import LoggedNavbar from "../components/LoggedNavbar";


function ExtractionScreen() {
    
  return (
      <div className="container">
        <LoggedNavbar />
        <br/>
        <CreateDeposit/>
      </div>
  );
}

export default ExtractionScreen;
