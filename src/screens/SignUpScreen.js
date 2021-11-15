import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreateAccount from "../components/CreateAccount";
import UnloggedNavbar from "../components/UnloggedNavbar";


function SignUpScreen() {
    
  return (
      <div className="container">
        <UnloggedNavbar />
        <br/>
        <CreateAccount/>
      </div>
  );
}

export default SignUpScreen;
