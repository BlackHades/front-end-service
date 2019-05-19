import React from 'react';
import PropTypes from 'prop-types';


class ExploreServiceContent extends React.Component{

    removeLoader = () => {

        window.addEventListener('load',function () {
            // const loader = document.querySelector('.loader-container');
            // loader.style.display = 'none';
        });

    };

    componentDidMount() {

        this.removeLoader();

    }

    render() {
        const {image,description,name,detectPhoneNumber} = this.props;
        return (
            <div>
                <div className="place-holder transparent no-border no-shadow">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="service-card">
                                <img className="service-card-image" src={image} alt="service" />
                                <p className="service-card-text">{name}</p>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="place-holder-text mt-5">
                                <p>
                                    {description}
                                </p>
                                <button onClick={detectPhoneNumber}
                                        className="btn btn-custom">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ExploreServiceContent.propTypes = {
    image:PropTypes.string,
    name:PropTypes.string,
    description:PropTypes.string,
    link:PropTypes.string,
};

export default ExploreServiceContent;