import React, {Component} from 'react';
import '../../serviceProviders.css';
import upload_icon from '../../images/service_providers/upload_icon.png';

import axios from 'axios';
const BASE_URL = 'http://localhost:5000/';

class serviceProvidersDocuments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imageUrls: [],
            message: ''
        }
    }

    selectImages = (event) => {
        let images = [];
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        let message = `${images.length} valid image(s) selected`
        this.setState({ images, message })
    };

    uploadImages = () => {
        const uploaders = this.state.images.map(image => {
            const data = new FormData();
            data.append("image", image, image.name);

            // Make an AJAX upload request using Axios
            return axios.post(BASE_URL + 'upload', data)
                .then(response => {
                    this.setState({
                        imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
                    });
                })
        });

        // Once all the files are uploaded
        axios.all(uploaders).then(() => {
            console.log('done');
        }).catch(err => alert(err.message));
    };

    render() {

        return(
            <div className="provider-child">
                {/*<p>header-container</p>*/}
                <div className="header-container">
                    <h3 className="h3">Upload relevant documents to your industry.</h3>
                </div>

                <div className="document-container">

                    <div className="header">
                        <h5 className="h5">Company Registration</h5>
                        <h6 className="h6">Please upload a scanned copy of your Company Registration Certificate</h6>

                        <img className="upload_icon" src={upload_icon}/>

                        <input className="picker-control " type="file"
                               onChange={this.selectImages} multiple/>
                    </div>

                    <div className="header">
                        <h5 className="h5">Company Registration</h5>
                        <h6 className="h6">Please upload a scanned copy of your Company Registration Certificate</h6>

                        <img className="upload_icon" src={upload_icon} />
                    </div>


                    <div className="header">
                        <h5 className="h5">Company Registration</h5>
                        <h6 className="h6">Please upload a scanned copy of your Company Registration Certificate</h6>

                        <img className="upload_icon" src={upload_icon} />
                    </div>

                    <div className="header">
                        <h5 className="h5">Company Registration</h5>
                        <h6 className="h6">Please upload a scanned copy of your Company Registration Certificate</h6>

                        <img className="upload_icon" src={upload_icon} />
                    </div>

                        <button type="submit" className="btn btn-default">Next</button>
                </div>

            </div>
        );
      }
    }

export default serviceProvidersDocuments;