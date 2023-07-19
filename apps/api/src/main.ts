import jsonServer from 'json-server';

import { generateMockData } from './utils';

const port = process.env['API_PORT'] || 3000;

generateMockData().then((mockData) => {
  const server = jsonServer.create();
  const router = jsonServer.router(mockData);

  const middleware = jsonServer.defaults();

  server.use(middleware);
  server.get('/', (req, res) => {
    res.send('API running 🥳');
  });
  server.use(
    jsonServer.rewriter({
      '/*': '/$1',
    })
  );
  server.use(router);
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
});
