import React from 'react';
import SelectInterestHeader from "../../components/SelectInterestHeader/SelectInterestHeader";
import SelectInterest from "../../components/SelectInterest/SelectInterest";


function SelectInterestPage() {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <SelectInterestHeader />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 ">
                            <SelectInterest />

                        </div>
                    </div>

                </div>

            </section>

        </React.Fragment>
    );
}

export default SelectInterestPage;
