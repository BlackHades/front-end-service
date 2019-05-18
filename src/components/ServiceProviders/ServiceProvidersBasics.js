import React, {Component} from 'react';
import '../../serviceProviders.css'

class serviceProvidersBasics extends Component {

    render() {
        return(
            <div className="provider-child">
                <div className="header-container">
                    <h3 className="h3">Please key in your company information</h3>
                </div>
                <div className="form-container">
                    <form action="">

                        <div className="form-group">
                            <label htmlFor="name">Company Name</label>
                            <input type="text" className="form-control" id="company-name" name="name"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Company Address</label>
                            <input type="address" className="form-control" id="company-address" name="address"/>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Company Email</label>
                                    <input type="email" className="form-control" id="email" name="email"/>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Company Phone</label>
                                    <input type="phone" className="form-control" id="company-phone" name="phone"/>
                                </div>
                            </div>

                        </div>


                        <div className="form-group">
                            <label htmlFor="desc">Company Description</label>
                            <textarea type="text" className="form-control" id="description" name="desc"/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="number">CAC Registration No</label>
                            <input type="number" className="form-control" id="cac-number" name="number"/>
                        </div>

                        <button type="submit" className="btn btn-default">Next</button>
                    </form>
                </div>
            </div>
        );
      }
    }

export default serviceProvidersBasics;