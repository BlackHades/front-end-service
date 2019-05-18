import React , {Component} from 'react';
import HomeImage from '../../svg/home.svg'  ;


class ExploreServiceHeader extends Component{

    render(){
        return (
            <div>

                <header className="header">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link custom-link" href="#">Explore Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-link" href="#">
                                <img className="menu-icon" src={HomeImage}/>
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}


export default ExploreServiceHeader;