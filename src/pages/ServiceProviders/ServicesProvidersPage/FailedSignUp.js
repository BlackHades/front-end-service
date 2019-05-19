import React , {Component} from 'react';
class FailedSignUp extends Component{

    render(){
        return (
            <div className={'loader-container'}>
                <div className="loader ">
                        <span className="sr-only"> Failed </span>
                </div>
            </div>
        );
    }
}


export default FailedSignUp;