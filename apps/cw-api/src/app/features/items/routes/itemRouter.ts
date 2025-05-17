import { z } from 'zod';
import { publicProcedure, router } from '../../../core/trpc';

export const itemRouter = router({
  itemList: publicProcedure
    .query(async () => {
      return ["item1", "item2", "item3"];
    }),
  itemById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      console.log({ opts });
      return ["item1"];
    })
});
