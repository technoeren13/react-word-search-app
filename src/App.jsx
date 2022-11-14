import React, { useState } from 'react';
import ResponseForm from './components/ResponseForm';
import SearchInput from './components/SearchInput';

const App = () => {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <div className='container'>
      <SearchInput searchWord={setWord} setLoading={setLoading} />

      {Object.keys(word).length === 0 ? (
        ''
      ) : (
        <ResponseForm loading={loading} response={word} />
      )}
    </div>
  );
};

export default App;
