import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import UnloggedNavbar from "../components/UnloggedNavbar";
import UsersList from "../components/UserList";


function LoginScreen() {
    
  return (
      <div className="container">
        <UnloggedNavbar />
        <br/>
        <UsersList />
      </div>
  );
}

export default LoginScreen;
