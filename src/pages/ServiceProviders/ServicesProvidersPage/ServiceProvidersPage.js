import React from 'react';
import ServiceProviderBasics from "../../../components/ServiceProviders/ServiceProvidersBasics";
import ServiceProviderDocuments from "../../../components/ServiceProviders/ServiceProvidersDocuments";
import '../../../serviceProviders.css'


function ServicesProviders(props) {
    const state = props.state;

    if(state == "basics"){
        return (
            <React.Fragment>
                <div className="provider-parent">
                    <ServiceProviderBasics  state={props} />
                </div>
            </React.Fragment>
        );
    }

    else if(state == "documents"){
        return (
            <React.Fragment>
                <div className="provider-parent">
                    <ServiceProviderDocuments  state={props} />
                </div>
            </React.Fragment>
        );
    }
}

export default ServicesProviders;
