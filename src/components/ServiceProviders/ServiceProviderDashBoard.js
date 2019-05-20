import React, {Component} from 'react';
// import '../../serviceProviders.css'
import '../../css/vendors.css'
import '../../app-assets/css/app.css'
import '../../assets/css/style.css'
import '../../app-assets/css/core/menu/menu-types/vertical-compact-menu.css'
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import key from '../../secret/public.key';

class ServiceProviderDashBoard extends Component {

    constructor(props){
        super(props);

        console.log("Token", props);

        // this.token = props.token;

        this.state = {
            fields: {},
            errors: {},
            server_response: {},
            addService : false
        };
    }

    isValid(token){
        console.log("SECRET-----> ", key);

        jwt.verify(this.token, key, function(err, decoded) {
            console.log("DECODED----B", decoded);
        });
    }

    addNewService(){
        this.setState({addService : true});
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
        if(this.addService){
            return <Redirect to='/service/provider/add_service' />
        }else{
            return (
                <body className="vertical-layout vertical-compact-menu 2-columns menu-expanded fixed-navbar" data-open="click" data-menu="vertical-compact-menu" data-col="2-columns">
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

                <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
                    <div className="main-menu-content">
                        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                            <li className=" nav-item"><a className="active" href="addservices.html"><i className="la la-bolt"></i><span className="menu-title" data-i18n="nav.dash.main">Services</span></a>
                            </li>
                            <li className=" nav-item"><a href="../dashboard/index.html"><i className="la la-bar-chart"></i><span className="menu-title" data-i18n="nav.dash.main">Dashboard</span></a>
                            </li>
                            <li className=" nav-item"><a  href="../users/users.html"><i className="la la-user-plus"></i><span
                                className="menu-title"
                                data-i18n="nav.starter_kit.main">Users</span></a>
                            </li>
                            <li className=" nav-item"><a href="changelog.html"><i className="la la-gear"></i><span className="menu-title"
                                                                                                                   data-i18n="nav.changelog.main">Settings</span></a>
                            </li>
                            <li className=" nav-item"><a href="../login/login.html"><i className="la la-sign-out"></i><span className="menu-title"
                                                                                                                            data-i18n="nav.category.support">Logout</span></a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="http://support.pixinvent.com/"
                                           data-i18n="nav.support_raise_support.main">Raise Support</a>
                                    </li>
                                    <li><a className="menu-item"
                                           href="hcreateservices.htmlttps://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/documentation"
                                           data-i18n="nav.support_documentation.main">Documentation</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="app-content content">
                    <div className="content-wrapper">

                        <div className="content-body">

                            <div className="row">
                                <div className="col-4">
                                    <a href="#" className="btn btn-float btn-square btn-square-blue-outline " onClick={this.addNewService}><i className="la la-plus la-4x"/></a>
                                    <p className="display-inline pl-md-1 ">Click here to add</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                </body>
            );
        }
  }
}

export default ServiceProviderDashBoard;