import React from "react";

const TextInputField = props => {
  return(
    <div>
      <input
        onChange={props.handleChange}
        name={props.name}
        type="text"
        value={props.value}
      />
    </div>
  )
}

export default TextInputField;
