import React , {Component} from 'react';
import {Link} from "react-router-dom";

const ServiceContent = (props) => {


        return (
            <React.Fragment>
                <div className="col-md-4 col-sm-6">
                    <div className="service-info">
                        <div className="service-card">
                            <label> Subscribe</label>
                            <img className="service-card-image" src={props.image}/>
                            <p className="service-card-text">{props.title}</p>
                        </div>
                        <p>{props.description} <Link  className={'service-card-link'} to={'/create-profile'}>Click here</Link></p>
                    </div>
                </div>
            </React.Fragment>
        );

};


export default ServiceContent;