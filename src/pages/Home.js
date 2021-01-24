import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const Home = () => {
  
  console.log('home render');
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;