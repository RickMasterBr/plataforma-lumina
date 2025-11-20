import React from 'react';
import Spinner from '../components/atoms/Spinner';
import styles from './TelaGeral01_Loading.module.css';

function TelaGeral01_Loading() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}

export default TelaGeral01_Loading;