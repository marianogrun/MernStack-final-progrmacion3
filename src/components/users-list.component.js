import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);

        this.state = {
            username: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
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
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user){
                                return <option
                                  key={user}
                                  value={user}>{user}
                                  </option>;
                            })
                        }
                    </select>
                </div>
            </form>
        </div>    
        )
    }
}