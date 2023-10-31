import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import useAuth from "../../authentication/hooks/useAuth";
import { updateProject } from "../../../utils/api";

function useUpdateProjectMutation() {
  const { currentUser } = useAuth();
  const { pathname } = useLocation();
  const userId = currentUser?.uid;

  const mutation = useMutation({
    mutationFn: ({ char, exportType }) =>
      updateProject(userId, pathname, char, exportType),
  });

  return mutation;
}

export default useUpdateProjectMutation;
