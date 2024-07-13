import React from 'react';
import Header from '../components/common/Header'
import { formatNumber } from '../utils/format';

const Home = () => {
  return(
    <>
      <Header />
      <div>BookStore</div>
      <div>count: {formatNumber(1000000)}</div>
    </>
  );
}

export default Home;