import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { appRouter } from '../routes/router';
import type { AppRouter } from '../routes/router';
import { createContext } from '../context';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ path, error }) {
        // report to error monitoring
        console.error(`Error in tRPC handler on path '${path}':`, error);
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions']
  });
});
