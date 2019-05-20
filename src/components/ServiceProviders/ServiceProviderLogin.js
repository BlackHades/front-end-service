import React, {Component} from 'react';
import '../../serviceProviders.css'
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import key from '../../secret/public.key';

class serviceProviderLogin extends Component {

    constructor(props){
        super(props);

        console.log(props.token);

        this.token = props.token;

        this.state = {
            fields: {},
            errors: {},
            server_response: {}
        };
    }

    isValid(token){
        console.log("SECRET-----> ", key);

        jwt.verify(this.token, key, function(err, decoded) {
            console.log("DECODED----B", decoded);
        });
    }

    async postCredentials() {

        const form_data = {
            "password" : this.state.fields.password,
            "confirm_password" : this.state.fields.confirm_password,
        };

        try {
            console.log("VALIDATION", form_data);

            await axios.post('http://localhost:5000/', form_data )
                .then(res => {
                this.state.server_response = res.data;

                console.log("RESPONSE", res +"\n\n");
                console.log("RESPONSE - DATA", res.data);
            });

        } catch (error) {
            console.error("FAILED", error);
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        console.log("SOMETHING", this.state);

        let pass = fields["password"];
        let confirm_pass = fields["confirm password"];
        if(!pass){
            formIsValid = false;
            errors["password"] = "Password field cannot be empty";
        }

        if(pass.length < 6){
            formIsValid = false;
            errors["password"] = "Password must be at least 6 characters long";
        }

        if(!confirm_pass){
            formIsValid = false;
            errors["cpassword"] = "Confirm password field cannot be empty";
        }

        if(!confirm_pass.length < 6){
            formIsValid = false;
            errors["cpassword"] = "Password must be at least 6 characters long";
        }

        if(pass !== confirm_pass){
            formIsValid = false;
            errors["password"] = "Password do not match!!!";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
            this.postCredentials();
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        if(!this.isValid(this.token)) {
            return (
                    <div className="provider-child">
                        <div className="header-container">
                            <h3 className="h3">Sign up here</h3>
                        </div>

                        <div className="divider"/>

                        <div className="sign-up-container">
                            <div className="form-container-sign-up">
                                <form onSubmit={this.contactSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                                        <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address">Confirm password</label>
                                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={this.handleChange.bind(this, "cpassword")} value={this.state.fields["cpassword"]}/>
                                        <span style={{color: "red"}}>{this.state.errors["cpassword"]}</span>
                                    </div>

                                    <div className="sign-up-button-container">
                                        <button type="submit" className="btn btn-default">Sign Up</button>
                                    </div>
                                </form>
                                <p className="text-center mt-2">Don't have an account? <a href="changepasword.html">Sign Up Here</a></p>
                            </div>
                        </div>

                    </div>
            );
        }else{
            return <Redirect to='/service/provider/basics' />
        }
      }
    }

export default serviceProviderLogin;