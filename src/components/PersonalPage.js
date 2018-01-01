import React from 'react';
import { Field, reduxForm } from 'redux-form';
import customField from './customField';
import validate from '../workers/validate';


// second page
const PersonalPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div id="step-two">
        <div className="group">
          <div className="flex space-between two-col">
            <Field
              name="firstName"
              placeholder="First Name"
              component={customField}
              type="text"
            />
            <Field
              name="lastName"
              placeholder="Last Name"
              component={customField}
              type="text"
            />
          </div>
            <Field
              name="email"
              placeholder="e-mail"
              component={customField}
              type="text"
              className="full-width"
            />
        </div>
        <div className="group">
            <Field
              name="billingAddress"
              placeholder="Billing Address"
              component={customField}
              type="text"
              className="full-width"
            />
          <div className="flex space-between three-col">
            <Field
              name="billingCity"
              placeholder="City"
              component={customField}
              type="text"
            />
            <Field
              name="billingState"
              placeholder="State"
              component={customField}
              type="text"
            />
            <Field
              name="billingZip"
              placeholder="Zip"
              component={customField}
              type="text"
            />
          </div>
            <Field
              name="billingCountry"
              placeholder="Country"
              component={customField}
              type="text"
              className="full-width"
            />
            <div>
              <Field
                name="dedicate"
                component="input"
                type="checkbox"
              />
              <span>Dedicate to someone</span>
              <div id="dedicatee-container">
                <Field
                  name="dedicateeName"
                  placeholder="Dedicatee Name"
                  component={customField}
                  type="text"
                  className="full-width"
                />
                <Field
                  name="dedicateeEmail"
                  placeholder="Dedicatee Email"
                  component={customField}
                  type="text"
                  className="full-width"
                />
              </div>
            </div>
        </div>
        <div className="two-col flex space-between bottom-button">
          <button className="submit previous" onClick={previousPage}>
            <span>Back</span>
          </button>
          <button className="submit next" type="submit" >
            <span>Next</span>
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
 
})(PersonalPage);
