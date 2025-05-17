import { createContextId } from "@builder.io/qwik";
import type { QueryClient } from "@tanstack/query-core";

export const QueryClientContext = createContextId<QueryClient>(
  'tanstack-query-context'
);
