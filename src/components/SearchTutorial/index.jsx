import React from 'react';
import './style.css';

function SearchTutorial(props) {
  const handleTextChanged = (event) =>
    props.setSearchTutorial(event.target.value);

  return (
    <div className='center'>
      <input
        className='searchBox'
        placeholder='Tutorial Name'
        // className='searchtutorial'
        type='text'
        value={props.searchTutorial}
        onChange={handleTextChanged}
      />
    </div>
  );
}

export default SearchTutorial;
