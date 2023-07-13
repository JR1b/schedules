import jsonServer from 'json-server';
import { generateMockData } from './utils';

const port = 3001;

generateMockData().then((mockData) => {
  const server = jsonServer.create();
  const router = jsonServer.router(mockData);
  const middleware = jsonServer.defaults();

  server.use(middleware);
  server.use(router);
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
});
