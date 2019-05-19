import React , {Component} from 'react';
class ErrorPage extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className="error-container">
                <span className="error">{this.props.error}, Click to get an email {this.props.link}</span>
            </div>
        );
    }
}

export default ErrorPage;