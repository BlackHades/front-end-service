import React,{Component} from 'react';
import ServiceSearch from "../../../components/ServiceSearch/ServiceSearch";
import ServiceFilter from "../../../components/ServiceFilter/ServiceFilter";
import ServiceContent from "../../../components/ServiceContent/ServiceContent";
import {jsonResponse} from "../../../api/db";

class ServicesPage extends  Component {

    state = {
        services:[],
    };

    componentDidMount() {
        this.setState({
            services:[...this.state.services,...jsonResponse.services],
        });
    }

    render() {
        const {services} = this.state;
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-4 offset-md-4 col-sm-6 offset-sm-3">
                                <div className="search-header text-center">
                                    <ServiceSearch />
                                </div>
                            </div>
                            <div className="col col-md-3 offset-md-1 col-sm-3 offset-sm-3">
                                <div className="text-center">
                                    <a className="btn btn-custom" href="#">
                                        Join Us
                                    </a>
                                </div>

                            </div>
                            <div className="col-12 col-md-8 offset-md-2">
                                <ServiceFilter />
                            </div>
                        </div>

                        <div className="row">
                            {
                               services.length >0 ?
                                    services.map((service)=>{
                                        return(
                                            <React.Fragment>
                                                <ServiceContent
                                                    image={service.serviceImage}
                                                    description={service.serviceDescription}
                                                    title={service.serviceName}
                                                />
                                            </React.Fragment>
                                        )
                                    })
                                    :null
                            }



                        </div>
                    </div>
                </section>

            </React.Fragment>
        );

    }


}

export default ServicesPage;
