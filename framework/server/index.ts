import Fastify from 'fastify';
import { registerAppRoutes } from './appModule/routes/appRoutes';
import { startMswServer } from './mswServerModule/services/mswServer';
import dotenv from 'dotenv';

dotenv.config();
const env = process.env.Node_ENV || 'development';
const runServer = async () => {
  await startMswServer(); // Start MSW server

  const fastify = Fastify({ logger: true });

  // Register all routes
  registerAppRoutes(fastify);

  fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
  });
};

runServer();
