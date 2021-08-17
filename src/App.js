import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import AccountsList from "./components/accounts-list.component";
import EditBankingAccounts from "./components/edit-bankingaccounts.component";
import CreateAccount from "./components/create-account.component";
import CreateUser from "./components/create-user.component";
import UsersList from "./components/users-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={UsersList} />
        <Route path="/accountsList" component={AccountsList} />
        <Route path="/edit/:id" component={EditBankingAccounts} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
