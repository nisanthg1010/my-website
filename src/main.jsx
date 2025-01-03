import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
 import Count from './components/Count.jsx';
 import Forms1 from './Forms1.jsx';
 import List from './List.jsx';
import Hooks from './Hooks.jsx';
import UseRef from './HuseRef.jsx';
import Console from './console.jsx';
import Nisanth from './Nisanth.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     
      <Count />
      <Forms1 />
      <List />
      <Hooks />
      <UseRef />
      <Nisanth/>
    <Console />
  
  </StrictMode>
);
