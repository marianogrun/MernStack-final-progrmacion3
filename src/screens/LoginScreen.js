import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import UnloggedNavbar from "../components/UnloggedNavbar";
import UsersList from "../components/UserList";


function LoginScreen({selectedUser, setSelectedUser}) {
    
  return (
      <div className="container">
        <UnloggedNavbar />
        <br/>
        <UsersList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
  );
}

export default LoginScreen;
