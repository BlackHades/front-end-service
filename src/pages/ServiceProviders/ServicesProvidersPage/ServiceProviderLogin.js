import React from 'react';
import LoginPage from "../../../components/ServiceProviders/ServiceProviderLogin";
import '../../../serviceProviders.css'


function ServiceProviderLogin(props) {
        return (
            <React.Fragment>
                <div className="provider-parent">
                    <LoginPage logins={props} />
                </div>
            </React.Fragment>
        );
}

export default ServiceProviderLogin;
