import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Createquote from './components/Createquote';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/Create" element = {<Createquote />}/> 
    </Routes>
    </>

  );
}

export default App;
