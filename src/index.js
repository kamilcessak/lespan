import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

ReactDOM.render(
  <Header />,
  document.querySelector('#head')
);
ReactDOM.render(
  <Main />,
  document.querySelector('#main')
);
ReactDOM.render(
  <Footer />,
  document.querySelector('#footer')
);