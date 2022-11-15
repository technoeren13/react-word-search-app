import React, {useEffect, useState} from 'react';
import ResponseForm from './components/ResponseForm';
import SearchInput from './components/SearchInput';

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState()
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) return

    setLoading(true)
    fetch(`https://sozluk.gov.tr/gts?ara=${searchPhrase}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSearchResult(data[0])
        } else {
          setSearchResult(data)
        }
      })
      .finally(() => setLoading(false))
  }, [searchPhrase])

  return (
    <div>
      <SearchInput onChange={(newPhrase) => setSearchPhrase(newPhrase)} />
      {
        searchResult ? (
          <ResponseForm loading={loading} searchResult={searchResult} />
        ) : null
      }
    </div>
  );
};

export default App;
