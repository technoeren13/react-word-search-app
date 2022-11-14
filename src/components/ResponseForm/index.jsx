import React from 'react';
import ReactLoading from 'react-loading';
import './style.css';

const ResponseForm = ({ loading, response }) => {
  return (
    <div className='form'>
      {loading ? (
        <ReactLoading
          type={'balls'}
          color={'#03fc4e'}
          height={100}
          width={100}
        />
      ) : (
        <div className='response-form'>
          {response.error ? <h3>❌ {response.error}</h3> : 'TODO'}
        </div>
      )}
    </div>
  );
};

export default ResponseForm;
