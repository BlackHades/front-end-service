import React from 'react';
import InputNumber from "../../../components/InputNumber/InputNumber";


function InputNumberPage(props) {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <InputNumber phoneNumber={props.phoneNumber} changeNumber={props.changeNumber} />
                      </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default InputNumberPage;
