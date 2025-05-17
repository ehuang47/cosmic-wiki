import { RequestEventLoader } from '@builder.io/qwik-city';
import { QueryClient } from "@tanstack/query-core";
import { isServer } from "../utils/utils";

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000 } },
  });

let browserQueryClient: QueryClient | undefined;

export const useQueryClient = (event?: RequestEventLoader) => {
  console.log({ isServer: isServer() });
  if (isServer()) {
    if (!event) {
      return makeQueryClient();
    }
    // Used for SSR, sharing query cache, and dehydration.
    const queryClientKey = 'QUERY_CLIENT_KEY';
    let client = event.sharedMap.get(queryClientKey) as QueryClient | undefined;

    if (!client) {
      client = makeQueryClient();
      event.sharedMap.set(queryClientKey, client);
    }

    return client;
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
};

/*
- route loaders run in parallel.
- we are sharing 1 server-side queryClient instance per SSR request
- need to wait for all loaders to finish populating cache before dehydrating and serializing into html root
- on browser, need to rehydrate just once before all loaders run, to prevent double fetching
*/
// let hydrated = false;
// export const useRehydrateQuery = (dehydratedCache: DehydratedState) => {
//   // ? does useTask re-run again on client
//   useTask$(() => {
//     if (!hydrated && !isServer()) {
//       const queryClient = useQueryClient();
//       hydrate(queryClient, dehydratedCache);
//       hydrated = true;
//     }
//     console.log('useRehydrateQuery', { isServer: isServer() });
//   });
// };
