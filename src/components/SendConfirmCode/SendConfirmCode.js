import React, {Component} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {Redirect} from "react-router-dom";
import {serviceConfirmedUrl} from "../../endpoints";
import {numbers} from "../../api/phonecode";
import {
    ToastConsumer,
    ToastProvider,
    withToastManager,
} from 'react-toast-notifications';

class SendConfirmCode extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            codes: [],
            code:null,
            isCodeValid: false,
            isCodeSubmitted:false,
        };

    }

    handleCode = event => {
        event.preventDefault();

        //get all the inputs if empty return error else save all inputs and redirect to congratulations page

        // get all the input values

        let numberOne = document.querySelector('#number-one').value;
        let numberTwo = document.querySelector('#number-two').value;
        let numberThree = document.querySelector('#number-three').value;
        let numberFour = document.querySelector('#number-four').value;
        let numberFive = document.querySelector('#number-five').value;

        const formValue = `${numberOne}${numberTwo}${numberThree}${numberFour}${numberFive}`;

        this.setState({
            code:formValue,
        },()=>{
            //get the code
            this.VerifyCode(this.state.codes,this.props.phoneNumber,this.state.code);
        });

        // //go to next page
        // this.setState({
        //     isCodeSubmitted:true,
        // });


    };

    validateInput = (e) => {
        if(e.target.value.length > 0 && e.keyCode !== 46 && e.keyCode !== 8 ){
            e.preventDefault();


        }

    };

    componentDidMount() {

        this.setState({
            codes:[...this.state.codes,...numbers.codes]
        });
    }


    VerifyCode = (codes, phone, code) => {

        // get the filter array based on number

      let phoneNumber = codes.filter((el) => {
          return el.number === phone;
      });

        const { toastManager } = this.props;

      if( phoneNumber[0].code === code){
          // this.setState({
          //     isCodeValid:true,
          // });
          toastManager.add('Saved Successfully', { appearance: 'success' });
          console.log('valid');
      }else{
          toastManager.add(`Something went wrong `, {
              appearance: 'error',
          });
          console.log('invalid');
      }

    };


    render() {

        // const {isCodeSubmitted} = this.state;
        const {phoneNumber} = this.props;


        if(this.state.isCodeValid){

            return (
                <Redirect push to={serviceConfirmedUrl}/>
            )
        }
        return (
            <div>
                <div className="place-holder text-center pb-null ">
                    <h3 className="header-text">Service Subscription</h3>
                    <div className="place-holder-text">
                        <p>Please, input the code we sent to {phoneNumber}</p>
                        <form className="text-center" onSubmit={this.handleCode}>
                            <div className="row">
                                <div className="col-sm-6 offset-sm-3 col-12 offset-0">
                                    <div className="form-group">
                                        <input type="number" id={'number-one'} onKeyUp={this.validateInput} onKeyDown={this.validateInput}
                                              className="form-control custom-form-control sm-input"/>
                                        <input type="number" id={'number-two'} onKeyUp={this.validateInput} onKeyDown={this.validateInput}
                                               className="form-control custom-form-control sm-input"/>
                                        <input type="number"
                                               onKeyUp={this.validateInput} id={'number-three'} onKeyDown={this.validateInput} className="form-control custom-form-control sm-input"/>
                                        <input type="number" onKeyUp={this.validateInput} id={'number-four'} onKeyDown={this.validateInput}
                                               className="form-control custom-form-control sm-input "/>
                                        <input type="number" onKeyUp={this.validateInput} id={'number-five'} onKeyDown={this.validateInput}
                                               className="form-control custom-form-control sm-input"/>
                                    </div>
                                    {
                                        this.validator.message('code', this.state.code, 'required|max:1')
                                    }
                                    {/* link to /success-confirmation */}
                                    <input type={'submit'}  className="btn btn-custom" value={'Continue'}/>
                                    <p className="gray-link">
                                        <a className={'gray-link'} onClick={this.resendCode}>Resend</a>
                                    </p>

                                    {/*{*/}
                                    {/*    isCodeSubmitted ? <Redirect push to={phoneConfirmUrl}/>:null*/}
                                    {/*}*/}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}

// wrap your component to pass in the `toastManager` prop
// const FormWithToasts = withToastManager(SendConfirmCode);

export default SendConfirmCode;