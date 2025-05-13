import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' };
  console.log('Raw body:', req.body);
  return { req, res, user };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
