/* eslint-disable no-console */
// import { Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Works } from './Components/Works';

const App: React.FC = () => {
  console.log('rendering app');
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <Works />
      {/* <Routes>
      </Routes> */}
    </div>
  );
}

export default App;
