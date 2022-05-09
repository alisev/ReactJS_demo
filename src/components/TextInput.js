import React from 'react'

const TextInput = ({ id, name, type, value, onChange, classes, checked }) => {
    return (
        <input
          id={ id }
          name={ name }
          type={ type }
          className={ classes }
          value={ value }
          onChange={ onChange }
          checked={ checked }
        />
      );
}

TextInput.defaultProps = {
  classes: "white-text validate",
  type: "text",
  value: "",
  checked: false,
}

export default TextInput;