import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoList from './component/TodoList.js';
const root =document.getElementById('root');
const virtualroot=ReactDOM.createRoot(root);
virtualroot.render(
  <div>
    <TodoList/>
</div>
);