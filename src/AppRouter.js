import React, {Component} from 'react';
import {
    confirmPhoneUrl,
    detectPhoneUrl,
    getServices,
    homeUrl,
    inputPhoneUrl,
    serviceConfirmedUrl,
    sendConfirmCode, createProfile, serviceProviderBasics,
    serviceProviderDocuments, serviceProviderCreatePassword,
    serviceProviderLogin
} from "./endpoints";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DetectNumberPage from "./pages/customer/DetectNumberPage/DetectNumberPage";
import App from "./App";
import {jsonResponse} from "./api/db";
import axios from "axios";
import {numbers} from "./api/phonecode";
import ConfirmNumber from "./components/ConfirmNumber/ConfirmNumber";
import ConfirmNumberPage from "./pages/customer/ConfirmNumberPage/ConfirmNumberPage";
import InputNumberPage from "./pages/customer/InputNumberPage/InputNumberPage";
import SendConfirmCodePage from "./pages/customer/SendConfirmCodePage/SendConfirmCodePage";
import SuccessMessagePage from "./pages/customer/SuccessMessagePage/SuccessMessagePage";
import CreateProfilePage from "./pages/customer/CreateProfilePage/CreateProfilePage";
import ServicesProvidersPage from "./pages/ServiceProviders/ServicesProvidersPage/ServiceProvidersPage";
import ServicesProvidersCreatePassword from "./pages/ServiceProviders/ServicesProvidersPage/ServiceProviderCreatePassword";
import ServiceProviderLogin from "./pages/ServiceProviders/ServicesProvidersPage/ServiceProviderLogin";
import ServiceProviderDashBoard from "./pages/ServiceProviders/ServicesProvidersPage/ServiceProviderDashBoard";

class AppRouter extends Component {

    state = {
        url: getServices,
        nextLink: detectPhoneUrl,
        services: [],
        firstService: null,
        loading: true,
        error: null,
        phoneNumbers: [],
        detectedNumber: null,
        serviceMessage: null
    };

    componentWillMount() {

        this.setState({
            loading: true
        });

    }

    componentDidMount() {
        //make call to api and retrieve the first resource
        // this.fetchFirstService(this.state.url.getServices);
        this.fetchFirstFromFile(jsonResponse);

    }

    fetchFirstFromFile = (response) => {
        // load in JSON data from file

        this.setState({
            services: [...this.state.services, ...response.services],
            firstService: response.services[0], loading: false
        }, () => {
            console.log(this.state.url);
        });

    };

    fetchFirstService = (url) => {
        let request = axios.get(url);
        request.then((response) => {
            //set states
            this.setState({
                firstService: response.data[0]
            })
        }).catch(err => {

            this.setState({loading: false, error: err.message});
            console.log(this.state.error);
        });
    };

    fetchAllServices = (url) => {
        let request = axios.get(url);
        request.then((response) => {
            //set states
            this.setState({
                services: [...this.state.services, response.data]
            });

            console.log(this.state.services);
        })
    };

    detectPhoneNumber = () => {

        //redirect to server and get header from page

        // import from db

        this.setState({
            phoneNumbers: [...this.state.phoneNumbers, ...numbers.numbers],
        }, () => {
            //filter all the phone numbers available
            let allPhoneNumbers = this.state.phoneNumbers.map((phone) => phone.phoneNumber);

            // pick one
            const randomNumber = allPhoneNumbers[Math.floor(Math.random() * allPhoneNumbers.length)];

            this.setState({
                detectedNumber: randomNumber,
                serviceMessage: 'Hey there, we have detected your phone number.'
            });

            console.log(this.state.detectedNumber);
        });


    };

    changeNumber = (e) => {

        //sets phone number if incorrect

        this.setState({
            detectedNumber:e.target.value,
        })

    };

    render() {
        const {detectedNumber, firstService} = this.state;
        return (
            <Router>

                <Route exact path={homeUrl} render={(props) => {
                    return (<App {...props}
                                 detectedNumber={detectedNumber}
                                 firstService={firstService}
                                 detectPhoneNumber={this.detectPhoneNumber}
                            />);
                        }}
                />

                <Route path={detectPhoneUrl}
                       render={(props) => <DetectNumberPage {...props} phoneNumber={detectedNumber}/>}
                />

               <Route path={confirmPhoneUrl}
                      render={(props) => <ConfirmNumberPage {...props} phoneNumber={detectedNumber}/>}
               />

               <Route path={inputPhoneUrl}
                      render={(props) => <InputNumberPage {...props} phoneNumber={detectedNumber} changeNumber={this.changeNumber} />}
               />

               <Route path={sendConfirmCode}
                      render={(props) => <SendConfirmCodePage {...props} phoneNumber={detectedNumber} />}
               />

               <Route path={serviceConfirmedUrl}
                      render={(props) => <SuccessMessagePage {...props} />}
               />

               <Route path={createProfile}
                      render={(props) => <CreateProfilePage {...props} />}
               />

                <Route path={serviceProviderBasics}
                       render={(props) => <ServicesProvidersPage {...props} state = {"basics"}/>}
                />

                <Route path={serviceProviderDocuments}
                       render={(props) => <ServicesProvidersPage {...props} state = {"documents"} />}
                />

                <Route path="/service/provider/email-confirm/:token" component={ServicesProvidersCreatePassword}
                />

                <Route path={serviceProviderLogin}
                       render={(props) => <ServiceProviderLogin {...props}/>}
                />

                <Route path="/service/provider/dashboard/" component={ServiceProviderDashBoard}
                />

            </Router>
        );
    }

}

export default AppRouter;
