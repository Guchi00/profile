import React from 'react';
import './App.css';
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/home/Home";
import { AboutMe } from './components/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
 
    </div>
  );
}
export default App;
