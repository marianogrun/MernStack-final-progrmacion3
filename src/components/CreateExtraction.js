import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../services/LocalStorage";

const AccountsTypes = {
    CUENTACORRIENTE: {
        id: "CUENTACORRIENTE",
        name: "Cuenta Corriente"
    },
    CAJADEAHORRO: {
        id: "CAJADEAHORRO",
        name: "Caja de Ahorro"
    }
};


export default class CreateExtraction extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeAccountTypes = this.onChangeAccountTypes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: LocalStorage.getObject("selectedUser").username,
            movementType: '',
            amount: '',
            accountState: '',
            date: '',
            accounts: []
        }
    }


    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onChangeAccountTypes(e) {
        this.setState({
            accountType: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const movement = {
            username: this.state.username,
            movementType: "Extracción",
            amount: this.state.amount,
            date: new Date()
        }

        console.log(movement);

        axios.post('http://localhost:5000/movements/add/', movement)
            .then(res => {
                console.log(res.data);
                window.location = "/accountsList";
            });
    }

    render() {
        return (
            <>
                <h3>Realizar una nueva extracción</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Monto a extraer: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                        />

                    </div>
                    <div className="form-group">
                        <label>Tipo de cuenta: </label>
                        <select ref={this.myRef}
                            required
                            className="form-control"
                            value={this.state.accountType}
                            onChange={this.onChangeAccountTypes}>
                            {Object.keys(AccountsTypes).map(key => (
                                <option key={key} value={key}>
                                    {AccountsTypes[key].name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Realizar la extracción" className="btn btn-primary" />
                    </div>
                </form>
            </>
        )
    }
}