import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from './components/paginator';
import './index.css';

ReactDOM.render(
  <Paginator totalPages={5} currentPage={2} />,
  document.getElementById('root')
);
