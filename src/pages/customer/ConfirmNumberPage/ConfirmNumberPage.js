import React from 'react';
import ConfirmNumber from "../../../components/ConfirmNumber/ConfirmNumber";


function ConfirmNumberPage(props) {



    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <ConfirmNumber phoneNumber={props.phoneNumber} />
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default ConfirmNumberPage;
