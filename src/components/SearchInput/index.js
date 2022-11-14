import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const SearchInput = ({ searchWord }) => {
  const [searching, setSearching] = useState(false);

  const searchWordFunc = async (e) => {
    if (e.key !== 'Enter') return;

    if (e.target.value.length < 1) return searchWord({});

    const response = await axios.get(
      `https://sozluk.gov.tr/gts?ara=${e.target.value}`
    );
    return searchWord(response.data);
  };

  return (
    <div className='search-input'>
      <h1>TDK Word Search</h1>
      <input type='text' onKeyUp={searchWordFunc} placeholder='Search Word' />
    </div>
  );
};

export default SearchInput;
