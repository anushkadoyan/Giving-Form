import React from 'react';

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
