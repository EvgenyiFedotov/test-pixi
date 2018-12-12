import clientExport from './client';
import ContentExport from './content';
import serverExport from './server';

export const client = clientExport;
export const Content = ContentExport;
export const server = serverExport;

export default {
  client,
  Content,
  server,
};
