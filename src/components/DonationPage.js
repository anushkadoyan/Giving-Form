import React from 'react';
import {Field, reduxForm} from 'redux-form';
import customField from './customField';
import validate from '../workers/validate';

const paymentOptions = ['Credit Card', 'PayPal', 'eCheck', 'Bitcoin'];
const paymentFrequency = ['One time', 'Monthly'];

// payment method selector
const renderPaymentSelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <select className={error && touched
      ? 'required'
      : ''} {...input}>
      <option value="">Select a payment method...</option>
      {paymentOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
  </div>
);

// payment frequency selector
const renderFrequencySelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <select className={error && touched
      ? 'required'
      : ''} {...input}>
      <option value="">Select a frequency...</option>
      {paymentFrequency.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
  </div>
);

//first page
const DonationPage = props => {
  const {handleSubmit} = props;

  // custom amount button clicked, populate input field
  function handleCustomClick(e) {
    e.preventDefault();
    props.change('paymentAmount', e.target.name);
    props.change('cover-fees', false);
  }

  // 3% fee checkbox clicked
  function handleFeeClick(e) {
    let amount = document.getElementsByName('paymentAmount')[0].value;
    if (e.target.value === "false") {
      let newAmount = amount * 1.03;
      props.change('paymentAmount', newAmount);
      
      // return as checkbox value will change
      return;
    } else {
      let newAmount = amount / 1.03;
      props.change('paymentAmount', newAmount);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="step-one">
        <div className="flex suggested-donations space-between">
          <input onClick={handleCustomClick} type="button" name="50" value="$50"/>
          <input onClick={handleCustomClick} type="button" name="100" value="$100"/>
          <input onClick={handleCustomClick} type="button" name="250" value="$250"/>
          <input onClick={handleCustomClick} type="button" name="500" value="$500"/>
        </div>
        <div className="flex custom-donation space-between ">
          <i className="fa fa-usd" aria-hidden="true"></i>
          <Field
            name="paymentAmount"
            type="number"
            component={customField}
            value="$500"
            placeholder="Custom amount"
            className="full-width"/>
        </div>
        <div>
          <Field
            name="cover-fees"
            component="input"
            type="checkbox"
            onChange={e => {
            handleFeeClick(e);
          }}/>
          <span>Add 3% to cover credit card fees</span>
        </div>
        <Field name="paymentOption" component={renderPaymentSelector}/>
        <Field name="paymentFrequency" component={renderFrequencySelector}/>
        <div className="bottom-button">
          <button className="full-width submit next" type="submit">
            <span>Your information</span>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DonationPage);
