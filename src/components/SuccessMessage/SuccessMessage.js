import React , {Component} from 'react';
import {Link} from "react-router-dom";
class SuccessMessage extends Component{

    render(){
        return (
            <div>
                <div className="place-holder">
                    <div className="row">
                        <div className="col-md-4 offset-md-1 col-sm-10 offset-sm-1">
                            <div className="service-card">
                                <img className="service-card-image" src="images/fiap@2x.png"/>
                                <p className="service-card-text">Flower In A Pot</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10 ">
                            <div className="place-holder-text mt-5">
                                <p>Congratulations, you have successfully subscribed to Flower in the Pot.</p>
                                <p><Link to="/create-profile">Click Here</Link> to edit your profile or to get more awesome
                                    contents from us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SuccessMessage;