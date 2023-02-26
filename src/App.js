import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Createquote from './components/Createquote';
import { useState } from 'react';

function App() {
  const [textTheme, settextTheme] = useState("light")
  const [theme, settheme] = useState("dark")
  function changeTheme(props){
if (theme == "dark"){
  settheme("light")
}
else{
  settheme("dark")
}
  }
  return (
    <>
    <Navbar theme = {theme} textTheme = {textTheme} changeTheme = {changeTheme} />
    <Routes>
      <Route path = "/take-echo" element = {<Home theme = {theme}/>}/>
      <Route path = "/Create" element = {<Createquote theme = {theme} />}/> 
    </Routes>
    </>

  );
}

export default App;
