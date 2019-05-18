import React ,{Component} from 'react';
import ExploreServicesPage from "./pages/customer/ExploreServicesPage/ExploreServicesPage";
import { detectPhoneUrl} from "./endpoints";

import Loader from "./components/Loader/Loader";
import {Redirect} from "react-router-dom";

class App extends Component{

    state = {
        loading:true,
    };

    redirectToDetectNumber = () => {
        return (
            <Redirect push to={{
                pathname:detectPhoneUrl
            }} />
        );
    };


    componentDidMount() {
        this.setState({
            loading:false
        });
    }


    render(){
        const {firstService,detectedNumber,detectPhoneNumber} = this.props;
        const {loading} = this.state;
    return (
        <div className="App">
            {
                loading=== true ? <Loader/> : <ExploreServicesPage firstService={firstService} detectedNumber={detectedNumber}  detectPhoneNumber={detectPhoneNumber} />
            }

            {
                detectedNumber !== null ? this.redirectToDetectNumber() : null
            }
        </div>


    );
  }

}

export default App;
