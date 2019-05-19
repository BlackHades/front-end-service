import React , {Component} from 'react';
import { Redirect } from 'react-router-dom';

class PendingMailSent extends Component{

    constructor(props){
        super(props);
        this.state = {
            createPassword : false
        };
    }

    createPasswordPage(){
        this.setState({createPassword: true});
    }

    render(){
        if(this.state.createPassword){
            return (
                <Redirect to='/service/provider/create/password'/>
            )
        }

        return (
            <div className={'loader-container'}>
                <div className="success-cont">
                    <span className="success">You have successfully indicated interest to provide a service. We have sent an email to you, click on the link to continue</span>
                    <button onClick={() => this.createPasswordPage()} className="btn btn-default continue-btn">Continue</button>
                </div>
            </div>
        )
    }
}
export default PendingMailSent;