import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './StyledInput';

export default function InputValidator({
  label,
  type,
  value,
  name,
  refHookForm,
  err,
  ...otherProps
}) {
  return (
    <StyledInput isError={err[name]}>
      <label>
        {label} :
        <input
          className={err[name] && 'errorInput'}
          type={type}
          placeholder={value}
          name={name}
          ref={refHookForm}
          {...otherProps}
        />
      </label>
      {err[name] && err[name].message}
    </StyledInput>
  );
}

InputValidator.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  name: PropTypes.string.isRequired,
};
