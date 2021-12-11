import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


const AccountsTypes = [
    "Cuenta Corriente",
    "Caja de Ahorro"
];

const ClientTypes = [
    "Persona",
    "Empresa"
];


export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAccountTypes = this.onChangeAccountTypes.bind(this);
        this.onChangeClientType = this.onChangeClientType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            accountType: 'Cuenta Corriente',
            clientType: 'Persona',
            accounts: []
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeAccountTypes(e) {
        this.setState({
            accountType: e.target.value
        });
    }

    onChangeClientType(e) {
        this.setState({
            clientType: e.target.value
        });
    }

    generateRandomCBU = (accountNumber) => {
        return accountNumber + "0001230085360050"
    }

    onSubmit(e) {
        e.preventDefault();

        const accountNumber = 7205556;

        const account = {
            username: this.state.username,
            accountType: this.state.accountType,
            clientType: this.state.clientType,
            accountNumber: accountNumber,
            cbu: this.generateRandomCBU(accountNumber),
            balance: 0
        }

        console.log(account);

        axios.post('http://localhost:5000/accounts/add/', account)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <>
                <h3>Create New account</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />

                    </div>
                    <div className="form-group">
                        <label>Tipo de cuenta: </label>
                        <select ref={this.myRef}
                            required
                            className="form-control"
                            value={this.state.accountType}
                            onChange={this.onChangeAccountTypes}>
                            {AccountsTypes.map((acc) => (
                                <option key={acc} value={acc}>
                                    {acc}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Tipo de cliente: </label>
                        <select ref={this.myRef}
                            required
                            className="form-control"
                            value={this.state.clientType}
                            onChange={this.onChangeClientType}>
                            {ClientTypes.map((ct) => (
                                <option key={ct} value={ct}>
                                    {ct}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Account Log" className="btn btn-primary" />
                    </div>
                </form>
            </>
        )
    }
}