import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function query(key, queryFunction, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function mutate(key, mutationFunction, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSuccess: () => queryClient.invalidateQueries(key),
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  }

  return { query, mutate };
}
