import React from 'react';
import ReactLoading from 'react-loading';
import './style.css';
import { FaAngleRight } from 'react-icons/fa';

const ResponseForm = ({ loading, response }) => {
  return (
    <div className='form'>
      {loading ? (
        <div className='loading'>
          <ReactLoading
            type={'balls'}
            color={'#03fc4e'}
            height={50}
            width={100}
          />
        </div>
      ) : (
        <div className='response-form'>
          {response.error ? (
            <h3>❌ {response.error}</h3>
          ) : (
            <div className='word-info'>
              <div className='word-info-title'>
                <FaAngleRight /> <h2>{response[0].madde.toUpperCase()}</h2>
              </div>
              <hr />
              {response[0].anlamlarListe.map((value) => {
                return <li>{value.anlam}</li>;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponseForm;
