import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAuth from "../../authentication/hooks/useAuth";
import { deleteProject } from "../../../utils/api";

function useDeleteProjectMutation() {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ projectId }) => deleteProject(userId, projectId),
    onSettled: () => queryClient.invalidateQueries("projects"),
  });

  return mutation;
}

export default useDeleteProjectMutation;
