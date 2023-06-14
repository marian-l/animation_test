import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transition from './Transition';
import Animation from './Animation';
import { createRoot } from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Transition />
      <Animation />
    </div>
);
