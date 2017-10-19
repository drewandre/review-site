import React from 'react';

const SearchField = props => {
  return (
    // <label>{props.label}
      <input
        autoComplete='off'
        onChange={props.handlerFunction}
        type='text'
        placeholder={props.placeholder}
      />
  );
}

export default SearchField;
