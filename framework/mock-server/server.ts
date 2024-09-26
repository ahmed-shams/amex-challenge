import { setupServer } from 'msw/node';
import { randomUserHandler } from './handler';

export const startMswServer = async () => {
  const worker = setupServer(randomUserHandler);

  return worker.listen();
};
