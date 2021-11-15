import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import AccountsList from '../components/AccountList';
import LoggedNavbar from "../components/LoggedNavbar";

function UserAccountsScreen() {
    
  return (
      <div className="container">
        <LoggedNavbar />
        <br/>
        <AccountsList />
      </div>
  );
}

export default UserAccountsScreen;
