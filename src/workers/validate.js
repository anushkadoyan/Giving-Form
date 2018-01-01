const validate = values => {
  const errors = {};
  if (!values.paymentAmount) {
    errors.paymentAmount = 'Required';
  }
  if (!values.paymentOption) {
    errors.paymentOption = 'Required';
  }
  if (!values.paymentFrequency) {
    errors.paymentFrequency = 'Required';
  }
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else if (values.dedicate && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.dedicateeEmail)) {
    errors.dedicateeEmail = 'Invalid email address';
  }
  if (!values.billingAddress) {
    errors.billingAddress = 'Required';
  }
  if (!values.billingCity) {
    errors.billingCity = 'Required';
  }
  if (!values.billingState) {
    errors.billingState = 'Required';
  }
  if (!values.billingZip) {
    errors.billingZip = 'Required';
  }
  if (!values.billingCountry) {
    errors.billingCountry = 'Required';
  }
  if (!values.CCname) {
    errors.CCname = 'Required';
  }
  if (!values.CCnumber ) {
    errors.CCnumber = 'Required';
  }
  if (!values.CCexpiry|| !/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(values.CCexpiry)) {
    errors.CCexpiry = 'Required';
  }
  if (!values.CCcvc || !/^[0-9]{3,4}$/.test(values.CCcvc)) {
    errors.CCcvc = 'Required';
  }
  return errors;
};

export default validate;
