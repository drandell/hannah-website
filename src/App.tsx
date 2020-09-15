// This example is live editable
import React, { useEffect } from 'react';


import './css/bootstrap.scss';
import './App.scss';
import { Main } from './components/main';
import { Header } from './components/header';
import Footer from './components/footer';


export const App = () => {

  useEffect(() => {
    document.title = "Hannah Martin Smells 💩"
  }, []);

  return (
   <>
    <Header />
    <Main />
    <Footer />
   </>
  );
 };
export default App;
