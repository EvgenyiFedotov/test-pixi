/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default (content) => {
  ReactDOM.hydrate(
    <App>{content}</App>,
    document.getElementById('root'),
  );
};
