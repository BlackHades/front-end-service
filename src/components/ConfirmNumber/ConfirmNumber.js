import React , {Component} from 'react';
import {Link} from "react-router-dom";
class ConfirmNumber extends Component{

    render(){

        const {phoneNumber} = this.props;
        return (
            <div>
                <div className="place-holder text-center">
                    <h3 className="header-text">Service Subscription</h3>
                    <div className="place-holder-text">
                        <p className="place-holder-heading">Would you like us to send a confirmation code to {phoneNumber} ?</p>
                        <form className="text-center">
                            <div className="row">
                                <div className="col-sm-6 offset-sm-3 col">
                                    <Link to="/send-confirmation-code" className="btn btn-custom">Send</Link>
                                    <p className="gray-link">
                                        <Link to="/input-phone-number">Change Number</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default ConfirmNumber;