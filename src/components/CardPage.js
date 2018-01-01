import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CardReactFormContainer from 'card-react';
import validate from '../workers/validate';
import '../App.css';
import customField from './customField';


const StepThree = props => {
  const { handleSubmit, previousPage } = props;

  // credit card input mask
  function ccFormat(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (var i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="step-three">
        <CardReactFormContainer
          ref={(ref) => this.ccForm = ref }
          // the id of the container element where you want to render the card element.
          // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
          container="card-wrapper" // required

          // an object contain the form inputs names.
          // every input must have a unique name prop.
          formInputsNames = {
            {
              number: 'CCnumber', // optional — default "number"
              expiry: 'CCexpiry',// optional — default "expiry"
              cvc: 'CCcvc', // optional — default "cvc"
              name: 'CCname' // optional - default "name"
            }
          }
          classes={
            {
              valid: 'valid-input', // optional — default 'jp-card-valid'
              invalid: 'required' // optional — default 'jp-card-invalid'
            }
          }
          // specify whether you want to format the form inputs or not
          formatting={false} // optional - default true
          >
          <Field
            name="CCname"
            placeholder="Full Name"
            component="input"
            type="text"
            className="full-width margin"
          />
          <Field
            name="CCnumber"
            placeholder="Card number"
            component="input"
            className="full-width margin"
            type="text"
            onChange={e => { 
              e.preventDefault();
              props.change('CCnumber',ccFormat(e.target.value));
            }} 
          />
          <div className="two-col flex space-between margin">
            <Field
              name="CCexpiry"
              placeholder="MM/YY"
              component="input"
              type="text"
              maxLength="7"
            />
            <Field
              name="CCcvc"
              placeholder="CVC"
              component="input"
              type="text"
              maxLength="4"
            />
          </div>
        </CardReactFormContainer>
        <br/>
        <div id="card-wrapper"></div>
        <br/>
        <div className="two-col flex space-between bottom-button">
          <button className="submit previous" onClick={previousPage}>
            <span>Back</span>
          </button>
          <button className="submit" type="submit" >
            <span>Submit!</span>
          </button>
        </div>
      </div>
    </form>
  );
}


export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(StepThree);
  


  