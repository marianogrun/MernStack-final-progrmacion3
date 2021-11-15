import React, { Component } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditBankingAccounts extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAccountTypes = this.onChangeAccountTypes.bind(this);
        this.onChangeClientType = this.onChangeClientType.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            accountType: '',
            clientType: '',
            date: new Date(),
            accounts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[response.data.length-1].username
                    });
                }
            })
        axios.get('http://localhost:5000/accountsTypes')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        accounts: response.data.map(account => account.accountType),
                        accountType: response.data[0].accountType
                    });
                }
            })
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

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const bankingAcc = {
            username: this.state.username,
            accountType: this.state.accountType,
            clientType: this.state.clientType,
            date: this.state.date
        }

        console.log(bankingAcc);

        axios.post('http://localhost:5000/accounts/update/'+this.props.match.params.id, bankingAcc)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render(){
        return(
        <div>
            <h3>Edit BankingAccount Log</h3>
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
                        {
                            this.state.accounts.map(function(account){
                                return <option
                                  key={account}
                                  value={account}>{account}
                                  </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Tipo de cliente [Persona - Empresa]: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.clientType}
                        onChange={this.onChangeClientType}
                        />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit BankingAccount Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>    
        )
    }
}