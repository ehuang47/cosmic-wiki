import { router } from './core/trpc';
import { itemRouter } from './features';

export const appRouter = router({
  item: itemRouter
});

export type AppRouter = typeof appRouter;
