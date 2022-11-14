import React, { useState } from 'react';
import ResponseForm from './components/ResponseForm';
import SearchInput from './components/SearchInput';

const App = () => {
  const [word, setWord] = useState({});

  console.log(Object.keys(word));

  return (
    <div className='container'>
      <SearchInput searchWord={setWord} />

      {Object.keys(word).length === 0 ? '' : <ResponseForm response={word} />}
    </div>
  );
};

export default App;
