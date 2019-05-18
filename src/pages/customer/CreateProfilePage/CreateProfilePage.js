import React from 'react';
import CreateProfile from "../../../components/CreateProfile/CreateProfile";


function CreateProfilePage() {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <CreateProfile serviceTitle={''} serviceMessage={''} />
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default CreateProfilePage;
