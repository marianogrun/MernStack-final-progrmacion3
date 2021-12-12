import React, { Component } from "react";
import { fetchUserAccountsByUsername } from "../fetchdata";
import LocalStorage from "../services/LocalStorage";
import AccountListItem from './AccountListItem';

export default class AccountsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: [],
            selectedUser: LocalStorage.getObject("selectedUser")
        };
    }

    componentDidMount() {
        fetchUserAccountsByUsername(this.state.selectedUser.username)
            .then(accounts => this.setState({ accounts: accounts }));

    }

    renderAccounts() {
        return this.state.accounts?.map(currentaccount => {
            return <AccountListItem bankingAcc={currentaccount} key={currentaccount._id} />;
        })
    }

    render() {
        return (
            <>
                <h3>Cuentas</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Usuario</th>
                            <th>Nro de Cuenta</th>
                            <th>Saldo</th>
                            <th>CBU</th>
                            <th>Cliente</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderAccounts()}
                    </tbody>
                </table>
            </>
        );
    }
}