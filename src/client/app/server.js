import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import html from './html';

export default (content, params = {}) => html({
  title: 'test-pixi',
  content: renderToString(<App>{!!content && content()}</App>),
  ...params,
});
