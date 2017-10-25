import React from 'react';

const SearchDropdown = props => {

  let buttonState;
  if (props.onlyReviews) {
    buttonState = 'reviews-active'
  } else {
    buttonState = 'reviews-not-active'
  }

  return (
    <div className='search-dropdown'>
      <div onClick={props.handleOnlyReviews} id={buttonState}>Only reviews</div>
      <input
        disabled={props.disableField}
        id='language-filter'
        autoComplete='off'
        type='text'
        placeholder='filter by language'
        onChange={props.handleLanguageChange}
        value={props.language}
      />
      <input
        disabled={props.disableField}
        id='topic-filter'
        autoComplete='off'
        type='text'
        placeholder='filter by topic'
        onChange={props.handleTopicChange}
        value={props.topic}
      />
    </div>
  );
}

export default SearchDropdown;
