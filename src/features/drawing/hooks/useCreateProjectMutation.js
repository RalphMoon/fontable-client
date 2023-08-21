import { useMutation } from "@tanstack/react-query";

import { createProject } from "../../../utils/api";

function useCreateProjectMutation() {
  const mutation = useMutation({
    mutationFn: ({ imageUrl }) => createProject(imageUrl),
  });

  return mutation;
}

export default useCreateProjectMutation;
