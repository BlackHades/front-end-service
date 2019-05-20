import React , {Component} from 'react';
class InvalidPassword extends Component{

    render(){
        return (
            <div className="error-container">
                <span className="error">{this.props.error}</span>
            </div>
        );
    }
}

export default InvalidPassword;