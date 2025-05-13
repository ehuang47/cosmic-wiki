import { publicProcedure, router } from "../trpc";
import { z } from 'zod';

export const userRouter = router({
  userList: publicProcedure
    .query(async () => {
      return [];
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      console.log({ opts });
      return [];
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      console.log({ opts });
      return [];
    })
});
