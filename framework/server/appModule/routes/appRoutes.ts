import { FastifyInstance } from 'fastify';
import * as fs from 'fs';
import { buildHtmlDoc } from '../../utils/buildHtmlDoc';
import { renderApp } from '../client/renderApp';
import { wipeCache } from '../services/cacheService';

export const registerAppRoutes = (fastify: FastifyInstance) => {
  const clientJs = fs.readFileSync('./dist/client.js');
  const mswJs = fs.readFileSync('./dist/mockServiceWorker.js');

  fastify.get('/client.js', async (request, reply) => {
    reply.header('content-type', 'text/javascript').send(clientJs);
  });

  fastify.get('/mockServiceWorker.js', async (request, reply) => {
    reply.header('content-type', 'text/javascript').send(mswJs);
  });

  fastify.get('/', async (request, reply) => {
    reply
      .header('content-type', 'text/html')
      .send(
        buildHtmlDoc(
          [
            `<h1>Welcome to the People Directory</h1><p>Visit <a href="/appWithSSRData">/appWithSSRData</a> to see data loaded on the server</p><p>Visit <a href="/appWithoutSSRData">/appWithoutSSRData</a> to see data loaded on the client</p>`,
          ],
          false,
        ),
      );
  });

  fastify.get('/appWithSSRData', async (request, reply) => {
    wipeCache();
    reply
      .header('content-type', 'text/html')
      .send(buildHtmlDoc(await renderApp(true)));
  });

  fastify.get('/appWithoutSSRData', async (request, reply) => {
    wipeCache();
    reply
      .header('content-type', 'text/html')
      .send(buildHtmlDoc(await renderApp(false)));
  });
};
