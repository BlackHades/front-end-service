import React, {Component} from 'react';
import '../../serviceProviders.css'
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import key from '../../secret/public.key';

class ServiceProviderDashBoard extends Component {

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

    render() {
            return (
                <div>
                   {/*dashboard*/}
                </div>
            );
      }
}

export default ServiceProviderDashBoard;