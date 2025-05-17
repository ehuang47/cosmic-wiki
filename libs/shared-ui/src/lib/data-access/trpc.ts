import type { AppRouter } from '@apps/cw-api';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5173/trpc',
    }),
  ],
});
