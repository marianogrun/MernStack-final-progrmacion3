import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";
import UserAccountsScreen from "./screens/UserAccountsScreen";
import ViewMovementsScreen from "./screens/ViewMovementsScreen";
import ExtractionScreen from "./screens/ExtractionScreen"
import DepositScreen from "./screens/DepositScreen"


function App() {
  return (
    <Router>
      <Route path="/" exact component={() => <LoginScreen />} />
      <Route path="/accountsList" component={() => <UserAccountsScreen />} />
      <Route path="/movements" component={() => <ViewMovementsScreen />} />
      <Route path="/create" component={SignUpScreen} />
      <Route path="/createExtraction" component={ExtractionScreen} />
      <Route path="/createDeposit" component={DepositScreen} />
    </Router>
  );
}

export default App;
