import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";


class DetectNumber extends Component {

    state = {
        changeNumber: true,
        phoneNumbers:[],
        phoneNumber:null,
    };

    submitCodeAndNumber = (e) => {
        e.preventDefault();

        //on success render the link to the next page
    };




    render() {
        const {serviceMessage,serviceTitle,phoneNumber,confirmPhoneUrl,inputPhoneUrl} = this.props;
        return (
            <div>
                <div className="place-holder text-center">
                    <h3 className="header-text">{serviceTitle}</h3>
                    <div className="place-holder-text">
                        <p className="place-holder-heading">
                            {/*Hey there, we have detected your phone number.*/}
                            {serviceMessage}
                        </p>
                        <form className="text-center" onSubmit={this.submitCodeAndNumber}>
                            <div className="row">
                                <div className="col-md-6 offset-md-3 offset-0 col-12">
                                    <div className="form-group">
                                        {
                                            phoneNumber === null ?
                                                <Loader></Loader> :
                                                <label className="phone-label"> {phoneNumber}</label>

                                        }
                                    </div>

                                    {
                                        phoneNumber !== null ? <Link className="btn btn-custom"
                                                                      to={confirmPhoneUrl}>Continue</Link> :
                                            <button className='btn btn-custom' disabled='disabled'>Continue</button>
                                    }


                                        <p className="gray-link">
                                            { this.state.changeNumber ?
                                                <Link to={inputPhoneUrl}>
                                                Not You ?
                                                </Link>:
                                                <button className='btn btn-custom' disabled>
                                                    Not You ?
                                                </button>
                                            }
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


export default DetectNumber;