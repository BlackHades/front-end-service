import React, {Component} from 'react';
import '../../serviceProviders.css'
import '../../css/vendors.css'
import '../../app-assets/css/app.css'
import '../../assets/css/style.css'
import '../../app-assets/css/core/menu/menu-types/vertical-compact-menu.css'
import '../../app-assets/js/core/libraries/jquery.min.js'
import '../../app-assets/js/core/libraries/bootstrap.min.js'
import '../../assets/js/scripts.js'
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
                    <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light  navbar-light-blue  navbar-shadow">
                        <div className="navbar-wrapper">
                            <div className="navbar-header">
                                <ul className="nav navbar-nav flex-row">
                                    <li className="nav-item mobile-menu d-md-none mr-auto">
                                        <a className="nav-link nav-menu-main menu-toggle hidden-xs is-active" href="#">
                                        <i className="ft-menu font-large-1">Missing Text</i>
                                    </a>
                                    </li>
                                    <li className="nav-item"><a className="navbar-brand" href="../dashboard/index.html">
                                        <h3 className="brand-text">Telecomme</h3></a></li>
                                    <li className="nav-item d-md-none">
                                        <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile">
                                        <i className="la la-ellipsis-v">Missing Text</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-container content">
                                <div className="collapse navbar-collapse" id="navbar-mobile">
                                    <ul className="nav navbar-nav mr-auto float-left">
                                        <li className="nav-item d-none d-md-block">
                                            <a className="nav-link nav-link-expand " href="#">Users</a>
                                        </li>
                                        <li className="nav-item d-none d-md-block">
                                            <a className="nav-link nav-link-expand active" href="#">Subscribers</a>
                                        </li>
                                        <div className="search-input">
                                            <input className="input" type="text" placeholder="Explore Modern..."/>
                                        </div>
                                </ul>
                                <ul className="nav navbar-nav float-right">
                                    <li className="dropdown dropdown-language nav-item">

                                        <button type="button" className="btn btn-outline-light btn-min-width dropdown-toggle"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">This Year
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                </div>
            </nav>

        </div>
    );
  }
}

export default ServiceProviderDashBoard;