import React from 'react';

// custom field that changes border based on errors in validate.js
const customField = ({
  input,
  label,
  placeholder,
  className,
  type,
  maxLength,
  meta: {
    touched,
    error
  }
}) => (<input
  className={error && touched
  ? ('required ' + className)
  : className}
  {...input}
  placeholder={placeholder}
  maxLength = {maxLength}
  type={type}/>);

export default customField;
