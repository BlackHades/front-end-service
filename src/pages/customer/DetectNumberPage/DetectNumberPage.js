import React,{Component} from 'react';
import DetectNumber from "../../../components/DetectNumber/DetectNumber";
import {confirmPhoneUrl} from "../../../endpoints";
import {inputPhoneUrl} from "../../../endpoints";

class DetectNumberPage extends Component {

    state = {
        serviceTitle:'Service Subscription',
        serviceMessage:'Hey there your phone number has been detected',
        confirmPhoneUrl,
        inputPhoneUrl,
    };

    componentDidMount() {


       

    }

    render() {
        const {serviceMessage,serviceTitle,confirmPhoneUrl,inputPhoneUrl} = this.state;
        const {phoneNumber} = this.props;
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2">
                                <DetectNumber
                                    serviceTitle={serviceTitle}
                                    serviceMessage={serviceMessage}
                                    phoneNumber={phoneNumber}
                                    confirmPhoneUrl={confirmPhoneUrl}
                                    inputPhoneUrl={inputPhoneUrl}
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );

    }


}

export default DetectNumberPage;
