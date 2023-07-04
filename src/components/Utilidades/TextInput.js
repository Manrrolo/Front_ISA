import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';


const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const { onChange } = props.onChange ? props : field;
  const { onBlur, name, value } = field;

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="text-input"
        onChange={onChange}
        onBlur={onBlur}
        id={props.id}
        name={name}
        value={value}
        type={props.type}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        required={props.required}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.node.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  placeholder: '',
  onChange: undefined,
  min: undefined,
  max: undefined,
  required: false,
};

export default TextInput;
