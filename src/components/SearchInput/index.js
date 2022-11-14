import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const SearchInput = () => {
  const searchWord = async (e) => {
    if (e.key !== 'Enter') return;

    const response = await axios.get(
      `https://sozluk.gov.tr/gts?ara=${e.target.value}`
    );
    console.log(response.data);
  };

  return (
    <div className='container'>
      <h1>TDK Word Search</h1>
      <input type='text' onKeyUp={searchWord} placeholder='Search Word' />
    </div>
  );
};

export default SearchInput;
