import React , {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import {Redirect} from 'react-router-dom';
class InputNumber extends Component{


    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            phoneNumber:'',
            isPhoneSubmitted:false,
        };

    }

    sendNumber = () => {

    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            //send number to server


            //redirect to page where user receives code
            this.setState({
                isPhoneSubmitted:true
            });


        } else {

            //display errors
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    };

    setPhoneValue = (e) => {
        this.setState({
            phoneNumber:e.target.value
        });

    };


    render(){
        // 'regex:^234[0-9]{10}',
        // const rules = ['required','phone','regex:^[0]\\d{10}$'];
        return (
            <div>
                <div className="place-holder text-center">
                    <h3 className="header-text">Service Subscription</h3>
                    <div className="place-holder-text">
                        <p className="place-holder-heading">Please input your phone number to proceed.</p>
                        <form className="text-center" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 offset-sm-3 col-12 offset-0">
                                    <div className="form-group">
                                        <input type="number" value={this.props.phoneNumber} onChange={this.props.changeNumber} className="form-control custom-form-control"
                                               placeholder="0800 000 0000 "/>
                                        {
                                            this.validator.message('phoneNumber', this.props.phoneNumber,'required|phone|regex:^[0]\\d{10}$')
                                        }
                                    </div>
                                    {/* link to send-confirmation-code */}
                                    <input type='submit' value={'Continue'} className="btn btn-custom"/>
                                </div>
                            </div>
                        </form>
                        { this.state.isPhoneSubmitted ? <Redirect to="/send-confirmation-code" />: null}
                    </div>
                </div>
            </div>
        );
    }
}


export default InputNumber;