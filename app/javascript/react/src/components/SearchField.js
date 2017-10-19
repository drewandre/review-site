import React from 'react';

const SearchField = props => {
  return (
      <input
        autoComplete='off'
        onChange={props.handlerFunction}
        type='text'
        placeholder={props.placeholder}
      />
  );
}

export default SearchField;
