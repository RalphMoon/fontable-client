import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "../../../utils/api";

function useLoginMutation() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ token }) => login(token),
    onSuccess: () => navigate("/"),
    useErrorBoundary: true,
  });

  return mutation;
}

export default useLoginMutation;
