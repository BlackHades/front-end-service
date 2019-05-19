import React from 'react';
import CreatPassword from "../../../components/ServiceProviders/ServiceProviderCreatePassword";
import '../../../serviceProviders.css'


function ServiceProviderCreatePassword(props) {
    console.log("DATA-passed!!!", props.match.params.token);
    const token = props.match.params.token;

        return (
            <React.Fragment>
                <div className="provider-parent">
                    <CreatPassword token={token} />
                </div>
            </React.Fragment>
        );
}

export default ServiceProviderCreatePassword;
