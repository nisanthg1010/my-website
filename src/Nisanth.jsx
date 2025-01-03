import React from 'react';
import './App.css';

import Forms1 from './Forms1.jsx';
import List from './List.jsx';
import Hen from './Hen.jsx';
import { createContext,useEffect,useState } from 'react';
import HuseMemo from './components/HuseMemo.jsx';
export let nameContext = createContext();
function Nisanth() {

  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor(color === "black" ? "blue" : "black");
  };

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      
      <List />
      <nameContext.Provider value={"Water"}>
      <Hen/>
      </nameContext.Provider>
      <HuseMemo/>
      
      
    </div>
  );
}

export default Nisanth;
