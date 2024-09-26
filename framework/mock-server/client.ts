import { setupWorker } from 'msw/browser';
import { randomUserHandler } from './handler';

export const startMswClient = async () => {
  const worker = setupWorker(randomUserHandler);

  return worker.start();
};
