import React from 'react';
import CreatPassword from "../../../components/ServiceProviders/ServiceProviderCreatePassword";
import '../../../serviceProviders.css'


function ServiceProviderCreatePassword(props) {
        return (
            <React.Fragment>
                <div className="provider-parent">
                    <CreatPassword token={props.token} />
                </div>
            </React.Fragment>
        );
}

export default ServiceProviderCreatePassword;
