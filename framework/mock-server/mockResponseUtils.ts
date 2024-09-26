import { HttpResponse } from 'msw';

export const mockResponse = (data: any, status = 200, statusText = 'OK') => {
  return HttpResponse.json(data, {
    status,
    statusText,
  });
};
