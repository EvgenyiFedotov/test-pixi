import React from 'react';
import { server } from '../app';
import Content from './content';

export default () => server(() => <Content />, {
  modules: ['/main'],
});
