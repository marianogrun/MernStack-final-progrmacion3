import axios from 'axios';
import React, { Component } from "react";
import { fetchUserAccountsByUsername } from "../fetchdata";
import LocalStorage from "../services/LocalStorage";
import AccountListItem from './AccountListItem';

export default class AccountsList extends Component {
    constructor(props) {
        super(props);

        this.deleteAccount = this.deleteAccount.bind(this);

        this.state = {
            accounts: [],
            selectedUser: LocalStorage.getObject("selectedUser")
        };
    }

    componentDidMount() {
        fetchUserAccountsByUsername(this.state.selectedUser.username)
            .then(accounts => this.setState({ accounts: accounts }));

    }

    deleteAccount(id) {
        axios.delete('http://localhost:5000/accounts/' + id)
            .then(res => console.log(res.data));

        this.setState({
            bankingAcc: this.state.accounts.filter(el => el._id !== id)
        })
    }

    renderAccounts() {
        return this.state.accounts?.map(currentaccount => {
            return <AccountListItem bankingAcc={currentaccount} key={currentaccount._id} />;
        })
    }

    render() {
        return (
            <>
                <h3>Accounts</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Nro de Cuenta</th>
                            <th>Saldo</th>
                            <th>CBU</th>
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