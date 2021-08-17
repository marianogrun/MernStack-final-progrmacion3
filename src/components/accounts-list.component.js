import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const BankingAcc = props => (

    <tr>
        <td>{props.bankingAcc.username}</td>
        <td>{props.bankingAcc.nroCuenta}</td>
        <td>{props.bankingAcc.saldo}</td>
        <td>{props.bankingAcc.cbu}</td>
        <td>
            <Link to={"/edit/"+props.bankingAcc._id}>edit</Link> | <a href="#" onClick={() => {props.deleteAccount(props.bankingAcc._id) }}>delete</a>
        </td>
    </tr>
)


export default class AccountsList extends Component {
    constructor(props) {
        super(props);

        this.deleteAccount = this.deleteAccount.bind(this);

        this.state = { accounts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/accounts')
            .then(response => {
                this.setState({ accounts: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAccount(id) {
        axios.delete('http://localhost:5000/accounts/'+id)
            .then(res => console.log(res.data));

        this.setState({
            bankingAcc: this.state.accounts.filter(el => el._id !== id)
        })    
    }

    accountList() {
        return this.state.accounts.map(currentaccount => {
            return <BankingAcc bankingAcc={currentaccount} deleteAccount={this.deleteAccount} key={currentaccount._id}/>;
        })
    }

    render(){
        return(
            <div>
                <h3>Logged Users</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Nro de Cuenta</th>
                            <th>Saldo</th>
                            <th>CBU</th>
                            <th>Movimientos</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.accountList() }
                    </tbody>
                </table>
            </div>
        );
    }
}