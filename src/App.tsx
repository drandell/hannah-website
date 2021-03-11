// This example is live editable
import { useEffect } from 'react';


import './css/bootstrap.scss';
import './App.scss';
import { Main } from './components/main';

export const App = () => {

  useEffect(() => {
    document.title = "Hannah Martin Translation"
  }, []);

  return (
   <>
    <Main />
   </>
  );
 };
export default App;
