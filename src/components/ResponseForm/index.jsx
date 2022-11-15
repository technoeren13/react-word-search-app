import React from 'react';
import classes from './style.module.css';
import { FaAngleRight } from 'react-icons/fa';
import ReactLoading from "react-loading";

const ResponseForm = ({ searchResult, loading }) => (
  <div className={classes.form}>
    {
      loading ? (
        <div className={classes.loading}>
          <ReactLoading
            type={'balls'}
            color={'#03fc4e'}
            height={50}
            width={100}
          />
        </div>
      ) : (
        searchResult.error ? (
          <h3 className={classes.error}>❌ {searchResult.error}</h3>
        ) : (
          <div className={classes.wordInfo}>
            <div className={classes.wordInfoTitle}>
              <FaAngleRight /> <h2>{searchResult.madde.toUpperCase()}</h2>
            </div>
            <hr />
            {searchResult.anlamlarListe.map((value) => {
              return <li>{value.anlam}</li>;
            })}
          </div>
        )
      )
    }
  </div>
);

export default ResponseForm;
