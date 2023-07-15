import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transition from './Tag/Nacht/Transition';
import Animation from './slidingSection/Animation';
import Todo from './DeleteTodo/Todo.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Todo/>
    </div>
);
