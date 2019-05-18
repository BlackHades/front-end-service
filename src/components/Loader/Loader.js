import React , {Component} from 'react';
class Loader extends Component{

    render(){
        return (
            <div className={'loader-container'}>
                <div className="loader ">
                    <div className=" spinner-border gray-link" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Loader;