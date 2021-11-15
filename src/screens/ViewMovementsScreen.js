import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import AccountMovementList from "../components/AccountMovementList";
import LoggedNavbar from "../components/LoggedNavbar";

function ViewMovementsScreen() {
    
  return (
      <div className="container">
        <LoggedNavbar />
        <br/>
        <AccountMovementList />
      </div>
  );
}

export default ViewMovementsScreen;
