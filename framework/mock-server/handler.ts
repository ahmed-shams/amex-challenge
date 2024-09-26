import { delay, http, HttpResponse } from 'msw';
import { mockResponse } from './mockResponseUtils';
import { randomUserData } from './mockData';

export const randomUserHandler = http.get(
  'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb',
  async () => {
    await delay();
    return mockResponse(randomUserData, 202, 'Mocked status');
  },
);
