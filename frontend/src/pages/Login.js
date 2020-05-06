import React, { Component } from 'react'
import { Card, CardBody,CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import logo from './../images/logo_transparent.png'



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleEmail = event => {
        this.setState({email: event.target.value});
    }

    handlePassword = event => {
        this.setState({password: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const email = this.state.email;
        const password = this.state.password;

        axios.post('http://localhost:5000/api/auth/', { email, password })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    render() {
        return (
                <div> 
                    <Card className="bg-dark shadow">
                        <CardTitle className="text-center p-3">
                                <NavLink to="/register" className="d-block pull-right">
                                    <button type="button" className="btn btn-info">Register</button>
                                </NavLink>
                                
                            <img src={logo} className="d-block mx-auto  " height="150" width="150" />
                        </CardTitle>
                        <CardBody className="mx-auto w-50">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="email" placeholder="Email" onChange={this.handleEmail} className="form-control" />
                                <input type="password" name="password" placeholder="Password" onChange={this.handlePassword} className="form-control mt-4" />
                                <button type="submit" className="btn btn-success mt-4">Login</button>
                            </form>
                            
                        </CardBody>
                    </Card>
                </div>
            
        );
    }

}

export default Login;