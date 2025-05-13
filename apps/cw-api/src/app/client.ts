import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './routes/router';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

const list = trpc.user.userCreate.mutate({ name: '1' });
console.log({ list });
