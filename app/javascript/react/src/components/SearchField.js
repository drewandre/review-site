import React from 'react';

const SearchField = props => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default SearchField;
