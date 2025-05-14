import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@apps/cw-api';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

const list = trpc.user.userCreate.mutate({ name: '1' });
console.log({ list });
