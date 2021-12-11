import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { fetchAccountMovements } from "../fetchdata";
import LocalStorage from "../services/LocalStorage";
import AccountMovementListItem from "./AccountMovementListItem";

export default class AccountMovementList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movements: [],
      selectedUser: LocalStorage.getObject("selectedUser")
    };
  }

  componentDidMount() {
    fetchAccountMovements(this.state.selectedUser.username)
      .then(movements => this.setState({ movements: movements }));
  }

  renderMovements() {
    return this.state.movements?.sort((a, b) => a.movement > b.movement ? 1 : -1)
    .map(movement => {
      return <AccountMovementListItem movement={movement} key={movement._id} />;
    })
  }

  render() {
    return (
        <>
            <h3>Movimientos</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Tipo de Movimiento</th>
                        <th>Monto</th>
                        <th>Estado de cuenta</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderMovements()}
                </tbody>
            </table>
        </>
    );
}
}