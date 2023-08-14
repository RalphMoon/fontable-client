import { useMutation } from "@tanstack/react-query";
import { login } from "../../../utils/api";

function useLoginMutation() {
  const mutation = useMutation({
    mutationFn: ({ token }) => login(token),
    useErrorBoundary: true,
  });

  return mutation;
}

export default useLoginMutation;
