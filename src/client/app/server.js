import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import html from './html';

export default content => html({
  title: 'test-pixi',
  content: renderToString(<App>{content}</App>),
});
