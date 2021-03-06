import React, {Component} from 'react';
import '../../serviceProviders.css'
import axios from 'axios';
import Loader from "../Loader/Loader";
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import key from '../../secret/public.key';
import InvalidPassword from "../../pages/ServiceProviders/ServicesProvidersPage/InvalidPassword";

class serviceProviderCreatePassword extends Component {

    constructor(props){
        super(props);

        console.log("ALEJANDRA", props.token);

        this.token = props.token;

        this.state = {
            fields: {},
            errors: {},
            server_response: {},
            invalidToken : false,
            loading : false,
            gotodashboard : false,
            incorrect : false
        };
    }

    componentWillMount() {
        if(this.isValid(this.token)){
            console.log("VALID", "Parsed Token is valid"+this.token);
            this.setState({invalidToken : true});
        }else {
            console.log("INVALID", "Parsed Token is invalid"+this.token);
            this.setState({invalidToken : false});
        }

    }


    isValid(token){
        return token === "pass";

        jwt.verify(this.token, key, function(err, decoded) {
            console.log("DECODED----B", decoded);
        });
    }

    async postCredentials() {

        this.setState({loading : true});

        const form_data = {
            "password" : this.state.fields.password,
            "confirm_password" : this.state.fields.confirm_password,
        };

        //TODO:: uncomment when ready
        // try {
        //     console.log("VALIDATION", form_data);
        //
        //     axios.post('http://localhost:5000/', form_data )
        //         .then(res => {
        //         this.state.server_response = res.data;
        //
        //         console.log("RESPONSE", res +"\n\n");
        //         console.log("RESPONSE - DATA", res.data);
        //     }).catch(e => {
        //     if (e.response) {
        //         const errorMsg = JSON.stringify(e.response.data.error);
        //         console.log("REQUEST SUCCESS");
        //     } else if (e.request) {
        //         console.log(e.request);
        //     } else {
        //         console.log('Error', e.message);
        //     }
        // });
        //
        // } catch (error) {
        //     console.error("FAILED", error);
        // }

        if(this.state.fields.password === "password"){
            setTimeout(() => {
                this.setState({gotodashboard : true});
            }, 5000);
        }else{
            setTimeout(() => {
                this.setState({incorrect : true, loading : false});
            }, 5000);
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        console.log("DATA-IN", fields["password"]);

        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Password field cannot be empty";
        }else if(!fields["cpassword"]){
            formIsValid = false;
            errors["cpassword"] = "Confirm password field cannot be empty";
        }else{

            let pass = fields["password"];
            let confirm_pass = fields["cpassword"];

            if(pass.length < 6){
                formIsValid = false;
                errors["password"] = "Password must be at least 6 characters long";
            }else if(confirm_pass.length < 6){
                formIsValid = false;
                errors["cpassword"] = "Password must be at least 6 characters long";
            }else if(pass !== confirm_pass){
                formIsValid = false;
                errors["password"] = "Password do not match!!!";
            }
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
        if(this.isValid(this.token)) {
            return (
                    <div className="provider-child">
                        { this.state.loading ? <Loader/> :null}
                        { this.state.gotodashboard ? <Redirect to={{ pathname : '/service/provider/dashboard/', state: { token: this.token } }}/> : null}
                        { this.state.incorrect ? <InvalidPassword error = {"Invalid Password, Click here to reset your password"} /> :null}

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
                            </div>
                        </div>

                    </div>
            );
        }
        else {
            return <Redirect to='/service/provider/basics' />
        }
      }
    }

export default serviceProviderCreatePassword;