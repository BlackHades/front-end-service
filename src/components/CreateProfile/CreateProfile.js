import React , {Component} from 'react';
import {Link} from "react-router-dom";
class CreateProfile extends Component{
    render(){
        return (
            <div>
                <div className="place-holder">
                    <h3 className="header-text">Service Subscription</h3>
                    <div className="place-holder-text">
                        <p className="place-holder-heading  text-center">Please fill the following to update your
                            profile.</p>
                        <form className="pl-md-5 pr-md-5">
                            <div className="form-section">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="upload-btn-wrapper">
                                            <button className="btn file-btn">
                                                <img src="images/png/download.png"/>
                                            </button>
                                            <input type="file" name="myfile"/>
                                            <p>Upload Photo</p>
                                        </div>
                                        <p>Upload Photo</p>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-check-holder mt-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                       name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                    <label className="form-check-label"
                                                           htmlFor="inlineRadio1">female</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                       name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                    <label className="form-check-label"
                                                           htmlFor="inlineRadio2">male</label>
                                            </div>
                                        </div>
                                        <input type="date" className="form-control" required/>

                                    </div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="row">
                                    <div className="col-12 col-sm">
                                        <div className="custom-form-field">
                                            <input type="text" className="form-control custom-form-control"
                                                   placeholder="First Name"/>
                                                <label className="custom-form-label">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm">
                                        <div className="custom-form-field">
                                            <input type="text" className="form-control custom-form-control"
                                                   placeholder="Middle Name"/>
                                                <label className="custom-form-label">Middle Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm">
                                        <div className="custom-form-field">
                                            <input type="text" className="form-control custom-form-control"
                                                   placeholder="Surname"/>
                                                <label className="custom-form-label">Surname</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm">
                                        <div className="custom-form-field">
                                            <input type="text" className="form-control custom-form-control"
                                                   placeholder="Profile Name"/>
                                                <label className="custom-form-label">Profile Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm">
                                        <div className="custom-form-field">
                                            <input type="text" className="form-control custom-form-control"
                                                   placeholder="Email"/>
                                                <label className="custom-form-label">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm">
                                        <div className="custom-form-field">
                                            <input type="text" className="form-control custom-form-control"
                                                   placeholder="Location"/>
                                                <label className="custom-form-label">Location</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="profile-select">
                                            <div className="profile-select-group">
                                                <h5 className="text-left">Employment Status</h5>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="employed" value="option1"/>
                                                        <label className="form-check-label"
                                                               htmlFor="employed">Employed</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="unemployed" value="option2"/>
                                                        <label className="form-check-label"
                                                               htmlFor="unemployed">Unemployed</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="inlineRadio3" value="option1"/>
                                                        <label className="form-check-label"
                                                               htmlFor="inlineRadio3">Self-employed</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="inlineRadio4" value="option2"/>
                                                        <label className="form-check-label"
                                                               htmlFor="inlineRadio4">Student</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="row text-center">
                                    <div className="col-md-4 offset-md-2 col-6 offset-0">
                                        <Link to="/create-profile" className=" btn btn-custom"> Prev</Link>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <Link to="/select-interest" className=" btn btn-custom"> Next</Link>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateProfile;