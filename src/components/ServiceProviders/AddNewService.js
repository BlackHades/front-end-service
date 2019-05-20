import React, {Component} from 'react';
import '../../serviceProviders.css'
import axios from 'axios';
import Loader from "../Loader/Loader";
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import key from '../../secret/public.key';
import InvalidPassword from "../../pages/ServiceProviders/ServicesProvidersPage/InvalidPassword";

class AddNewService extends Component {

    constructor(props){
        super(props);

        console.log("NEW SERVICES PAGE", props);

        this.state = {
            fields: {},
            errors: {},
            server_response: {},
            fileSelected : false,
            loading : false,
            next : false
        };
    }

    // componentWillMount() {
    //     if(this.isValid(this.token)){
    //         console.log("VALID", "Parsed Token is valid"+this.token);
    //         this.setState({invalidToken : true});
    //     }else {
    //         console.log("INVALID", "Parsed Token is invalid"+this.token);
    //         this.setState({invalidToken : false});
    //     }
    // }

    //
    // isValid(token){
    //     return token === "pass";
    //
    //     jwt.verify(this.token, key, function(err, decoded) {
    //         console.log("DECODED----B", decoded);
    //     });
    // }

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

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Name field cannot be empty";
        }else if(!fields["category"]){
            formIsValid = false;
            errors["category"] = "Field cannot be empty";
        }else if(!fields["description"]){
            formIsValid = false;
            errors["description"] = "Field cannot be empty";
        }else{

            // let pass = fields["password"];
            // let confirm_pass = fields["cpassword"];
            //
            // if(pass.length < 6){
            //     formIsValid = false;
            //     errors["password"] = "Password must be at least 6 characters long";
            // }else if(confirm_pass.length < 6){
            //     formIsValid = false;
            //     errors["cpassword"] = "Password must be at least 6 characters long";
            // }else if(pass !== confirm_pass){
            //     formIsValid = false;
            //     errors["password"] = "Password do not match!!!";
            // }

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
            return (
                <div className="container">
                    <div className="app-content content">
                        <div className="content-wrapper">
                            <div className="content-body">
                                <section id="number-tabs">
                                    <div className="row">
                                            <div className="col-12 text-center">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 className="card-title text-center form-header header1">Please key in your service information</h4>
                                                        <h4 className="card-title text-center form-header header2">Access Channels</h4>
                                                        <h4 className="card-title text-center form-header header3">Company Registration</h4>
                                                        <h4 className="card-title text-center form-header header4">Billing configuration</h4>
                                                        <h4 className="card-title text-center form-header header5">Choose your Industry</h4>
                                                        <h4 className="card-title text-center form-header header6">Industry Registration</h4>
                                                        <div className="stepwizard offset-md-3">
                                                            <div className="stepwizard-row setup-panel">
                                                                <div className="stepwizard-step">
                                                                    <a href="#step-1"  className="btn btn-muted btn-dark-blue btn-circle show-header1">1</a>
                                                                </div>
                                                                <div className="stepwizard-step">
                                                                    <a href="#step-2" className="btn btn-muted  btn-circle show-header2"
                                                                       disabled="disabled">2</a>
                                                                </div>
                                                                <div className="stepwizard-step">
                                                                    <a href="#step-3"  className="btn btn-muted  btn-circle show-header3"
                                                                       disabled="disabled">3</a>
                                                                </div>
                                                                <div className="stepwizard-step">
                                                                    <a href="#step-4"  className="btn btn-muted  btn-circle show-header4"
                                                                       disabled="disabled">4</a>
                                                                </div>
                                                                <div className="stepwizard-step">
                                                                    <a href="#step-5"  className="btn btn-muted  btn-circle show-header5"
                                                                       disabled="disabled">5</a>
                                                                </div>
                                                                <div className="stepwizard-step">
                                                                    <a href="#step-6"  className="btn btn-muted  btn-circle show-header6"
                                                                       disabled="disabled">6</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            );
      }
    }

export default AddNewService;