import React , {Component} from 'react';
class ErrorPage extends Component{

    render(){
        return (
            <div className="error-container">
                <span className="error">{this.props.error}, Click <a href={"/service/provider/basics"}>Here</a> here to get an email</span>
            </div>
        );
    }
}

export default ErrorPage;