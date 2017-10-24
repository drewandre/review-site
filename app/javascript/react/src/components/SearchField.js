import React from 'react';

const SearchField = props => {
  return (
    <form className="search">
      <input
        className='text-center'
        autoComplete='off'
        onChange={props.handlerFunction}
        type='text'
        placeholder={props.placeholder}
      />
    </form>
  );
}

export default SearchField;
