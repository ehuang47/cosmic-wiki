import { useContext } from "@builder.io/qwik";
import { QueryClientContext } from "../context/context";

export const useQueryClient = () => {
  const queryClient = useContext(QueryClientContext);
  if (!queryClient) {
    throw new Error('QueryClient not available. Make sure it is provided on the client.');
  }
  return queryClient;
};
