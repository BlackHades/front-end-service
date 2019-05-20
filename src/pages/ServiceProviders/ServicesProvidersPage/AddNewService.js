import React from 'react';
import '../../../serviceProviders.css'
import AddNewService from "../../../components/ServiceProviders/AddNewService";

function ServiceProviderLogin(props) {
        return (
            <React.Fragment>
                <div className="provider-parent">
                    <AddNewService logins={props} />
                </div>
            </React.Fragment>
        );
}

export default ServiceProviderLogin;
