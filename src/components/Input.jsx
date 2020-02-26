import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  label,
  type,
  value,
  name,
  onChange,
  ...otherProps
}) {
  return (
    <label>
      {label} :
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        {...otherProps}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
