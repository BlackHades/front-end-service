import React, {Component} from 'react';
import '../../serviceProviders.css'
import Loader from "../Loader/Loader";
import PendingMailSent from "../../pages/ServiceProviders/ServicesProvidersPage/PendingMailSent";
import axios from 'axios';
import FailedSignUp from "../../pages/ServiceProviders/ServicesProvidersPage/FailedSignUp";
import ErrorPage from "../../pages/ServiceProviders/ServicesProvidersPage/ErrorPage";

class serviceProvidersBasics extends Component {

    constructor(props){
        super(props);

        this.state = {
            fields: {},
            errors: {},
            server_response: {},
            submitted : false,
            sent : false,
            failed : false,
            error : false,
            errorText : ""
        };
    }

    async postCredentials() {

        const form_data = {
            "type" : "provider",
            "name" : this.state.fields.name,
            "email" : this.state.fields.email,
            "phoneNumber" : this.state.fields.phone,
            "address" : this.state.fields.address,
            "description" : this.state.fields.description,
            "cacNumber" : this.state.fields.cac
        };

        axios.post('https://vas-user.herokuapp.com/users/api/v1/providers', form_data )
            .then(res => {
                this.state.server_response = res.data;

                console.log("RESPONSE", res +"\n\n");
                console.log("RESPONSE - DATA", res.data);

                if(res.data.status === 201){

                    this.setState({submitted: false});

                    this.setState({sent: true});

                    this.setState({failed: false});

                }else {

                    this.setState({submitted: false});

                    this.setState({failed: true});

                    this.setState({sent: false});
                }

            }).catch(e => {
            if (e.response) {
                const errorMsg = JSON.stringify(e.response.data.error);
                this.errorMsg = errorMsg.replace(/"/g,"");

                this.setState({sent: true, submitted: false, failed: false, error : false});

                // this.setState({errorText: this.errorMsg});
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(e.response.data);
                // console.log(e.response.status);
                // console.log(e.response.headers);

            } else if (e.request) {
                this.setState({errorText: e.message, error : true});
                console.log(e.request);
            } else {
                this.setState({error : true, errorText: JSON.stringify(e.message)});
                console.log('Error', e.message);
            }
        });

    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Company name cannot be empty";
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "Address cannot be empty";
        }

        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Phone cannot be empty";
        }

        if(!fields["description"]){
            formIsValid = false;
            errors["description"] = "Description cannot be empty";
        }

        if(!fields["cac"]){
            formIsValid = false;
            errors["cac"] = "Cac cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.setState({submitted : true}, () => {
                this.postCredentials();
            });
        }
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return(
            <div className="provider-child">
                { this.state.submitted ? <Loader/> :null}
                { this.state.failed ? <FailedSignUp/> :null}
                <div className="header-container">
                    <h3 className="h3">Please key in your company information</h3>
                </div>

                {this.state.error ? <ErrorPage error = {this.state.errorText} link = {'basics'}/> : null}
                {this.state.sent ? <PendingMailSent/> :null}

                <div className="form-container">
                    <form onSubmit={this.contactSubmit.bind(this)}>

                        <div className="form-group">
                            <label htmlFor="name">Company Name</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Company Address</label>
                            <input type="address" className="form-control" id="address" name="address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                            <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Company Email</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Company Phone</label>
                                    <input type="phone" className="form-control" id="phone" name="phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                </div>
                            </div>

                        </div>


                        <div className="form-group">
                            <label htmlFor="description">Company Description</label>
                            <textarea type="text" className="form-control" id="description" name="description" onChange={this.handleChange.bind(this, "description")} value={this.state.fields["description"]}/>
                            <span style={{color: "red"}}>{this.state.errors["description"]}</span>
                        </div>


                        <div className="form-group">
                            <label htmlFor="cac">CAC Registration No</label>
                            <input type="text" className="form-control" id="cac" name="cac" onChange={this.handleChange.bind(this, "cac")} value={this.state.fields["cac"]}/>
                            <span style={{color: "red"}}>{this.state.errors["cac"]}</span>
                        </div>

                        <button type="submit" className="btn btn-default">Next</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default serviceProvidersBasics;