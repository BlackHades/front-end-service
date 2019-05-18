import React , {Component} from 'react';

class SelectInterestHeader extends Component{

    render(){
        return (
            <div>
                <header className="header">
                    <h3 className="secondary-header-text">Please, pick what you are interested</h3>
                    <p>Updates will be sent to you based on your choices here.</p>
                </header>
            </div>
        );
    }
}


export default SelectInterestHeader;