import { useMutation } from "@tanstack/react-query";

import { createProject, updateProject } from "../../../utils/api";

export function useCreateProjectMutation() {
  const mutation = useMutation({
    mutationFn: ({ imageUrl }) => createProject(imageUrl),
  });

  return mutation;
}

export function useUpdateProjectMutation() {
  const mutation = useMutation({
    mutationFn: async ({ unicodePaths, fontType }) =>
      updateProject(unicodePaths, fontType),
  });

  return mutation;
}
