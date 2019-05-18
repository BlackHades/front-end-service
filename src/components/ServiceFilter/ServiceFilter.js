import React , {Component} from 'react';
class ServiceFilter extends Component{

    render(){
        return (
            <div>
                <form>
                    <div className="search-select-group flex-column flex-sm-row flex-md-row">
                        <span className="bold"> Filter : </span>
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="inlineRadio1"
                                   value="option1" checked />
                            <label className="form-check-label" htmlFor="inlineRadio1">Date</label>
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="inlineRadio2"
                                   value="option2"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">No of
                                Subscribers</label>
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="inlineRadio3"
                                   value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Service
                                Providers</label>
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="inlineRadio4"
                                   value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio4">Interests</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default ServiceFilter;