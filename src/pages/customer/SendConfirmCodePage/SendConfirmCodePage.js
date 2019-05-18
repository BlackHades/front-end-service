import React,{Component} from 'react';
import SendConfirmCode from "../../../components/SendConfirmCode/SendConfirmCode";


class SendConfirmCodePage extends Component{

    render() {
        const {phoneNumber} = this.props;
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2">
                                <SendConfirmCode phoneNumber={phoneNumber} />
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }


}

export default SendConfirmCodePage;
