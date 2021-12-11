import React, { Component } from "react";
import { fetchAccounts } from "../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../services/LocalStorage"


export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            users: [],
            selectedUser: props.selectedUser
        }
    }

    componentDidMount() {
        fetchAccounts()
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data,
                        selectedUser: response.data[0]
                    });
                }
            })
    }

    onChangeUser(e) {
        const username = e.target.value;
        const user = this.state.users.find(user => user.username === username)
        
        this.setState({
            selectedUser: user
        });
    }

    onSubmit(e) {
        e.preventDefault();
    

        LocalStorage.setObject("selectedUser", this.state.selectedUser)
        

        window.location.replace('/accountsList')
    }


    render(){
        return(
        <div>
            <h3>Users List</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref={this.myRef}
                        required
                        className="form-control"
                        value={this.state.selectedUser?.username}
                        onChange={this.onChangeUser}>
                        {
                            this.state.users.map(function(user){
                                return <option
                                  key={user.id}
                                  value={user.username}>{user.username}
                                  </option>;
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" value="Acceder" className="btn btn-primary"/>
                </div>
            </form>
        </div>    
        )
    }
}