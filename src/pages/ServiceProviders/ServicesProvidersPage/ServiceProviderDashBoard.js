import React from 'react';
import DashBoard from "../../../components/ServiceProviders/ServiceProviderDashBoard";
import '../../../serviceProviders.css'


function ServiceProviderDashBoard(props) {
    // console.log("DATA-passed!!!", props.match.params.token);
    // const token = props.token;

        return (
            <React.Fragment>
                <div className="provider-parent">
                    {/*<CreatPassword token={token} />*/}
                    <DashBoard token={""} />
                </div>
            </React.Fragment>
        );
}

export default ServiceProviderDashBoard;
