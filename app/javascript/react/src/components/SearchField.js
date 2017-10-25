import React from 'react';

const SearchField = props => {

  return (
    <form className="search">
      <div>
        <input
          id={props.searchFieldId}
          className={props.className}
          autoComplete='off'
          onChange={props.handlerFunction}
          type='text'
          placeholder={props.placeholder}
        />
        <div id='test-icon'>
          <i className="fa fa-sort-desc fa-2x" id='search-options' aria-hidden="true"></i>
        </div>
      </div>
    </form>
  );
}

export default SearchField;
