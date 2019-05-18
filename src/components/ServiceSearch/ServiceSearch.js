import React , {Component} from 'react';
import {Link} from "react-router-dom";
class ServiceSearch extends Component{

    render(){
        return (
            <div>
                <form>
                    <div className="input-group text-center">
                        <input type="text" className="custom-input form-control center"
                               placeholder="keyword"/>
                        <div className="input-group-append">
                            <button className="btn btn-search" type="button">
                                <img src="images/png/search.png"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default ServiceSearch;