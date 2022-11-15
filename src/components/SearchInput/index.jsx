import React, {useEffect, useState} from 'react';
import classes from './style.module.css';
import {useDebounce} from 'use-debounce';

const SearchInput = ({ onChange }) => {
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounce(value, 2000)

  useEffect(() => onChange(debouncedValue), [debouncedValue])

  return (
    <div className={classes.searchInput}>
      <h1 className={classes.text}>TDK Word Search</h1>
      <input
        className={classes.searchInputInput}
        type='text'
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Search Word'
      />
    </div>
  );
};

export default SearchInput;
