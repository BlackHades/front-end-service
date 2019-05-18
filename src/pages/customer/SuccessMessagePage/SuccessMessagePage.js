import React from 'react';
import SuccessMessage from "../../../components/SuccessMessage/SuccessMessage";


function SuccessMessagePage() {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <SuccessMessage serviceTitle={''} serviceMessage={''} />
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default SuccessMessagePage;
