import React, {Component} from 'react';
import ExploreServiceHeader from "../../../components/ExploreServiceHeader/ExploreServiceHeader";
import ExploreServiceContent from "../../../components/ExploreServiceContent/ExploreServiceContent";
import Error from "../../../components/Error/Error";


class ExploreServicesPage extends Component {



    render() {

        const {detectPhoneNumber,firstService,detectedNumber} = this.props;


        return (
            <React.Fragment>
                <section className="h-100">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/*   explore service header */}
                                <ExploreServiceHeader/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">

                                {
                                    firstService!=null?
                                        <ExploreServiceContent
                                            image={firstService.serviceImage}
                                            description={firstService.serviceDescription}
                                            name={firstService.serviceName}
                                            detectPhoneNumber={detectPhoneNumber}
                                            detectedNumber={detectedNumber}
                                        />:
                                        <Error message={'no content available'}/>
                                }
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );


    }


}

export default ExploreServicesPage;
