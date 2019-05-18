import React , {Component} from 'react';
import {Link} from "react-router-dom";

class SelectInterest extends Component{

    render(){
        return (
            <div>
                <form className="mb-5">
                    <div className="selections">
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox1"
                                   value="option1" />
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox1"><span>Culture</span><img
                                src="images/fiap@2x.png"/></label>

                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox2"
                                   value="option2"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox2"><span>Fashion</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox3"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox3"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox4"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox4"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox5"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox5"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox6"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox6"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox7"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox7"><span>Fishon</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox8"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox8"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox9"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox9"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                        <div className="form-check form-check-inline styled-checkbox">
                            <input className="form-check-input " type="checkbox" id="inlineCheckbox10"
                                   value="option3"/>
                            <label className="form-check-label"
                                   htmlFor="inlineCheckbox10"><span>Art</span><img
                                src="images/fiap@2x.png"/></label>
                        </div>
                    </div>
                    <div>
                        <Link to="/services" className="btn btn-custom">Done</Link>
                    </div>
                </form>
            </div>
        );
    }
}


export default SelectInterest;