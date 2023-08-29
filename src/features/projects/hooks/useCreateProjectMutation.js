import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { createProject } from "../../../utils/api";

function useCreateProjectMutation() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ uid, fontFamilyName }) => createProject(uid, fontFamilyName),
    onSuccess: (data) => navigate(`/projects/${data}`),
  });

  return mutation;
}

export default useCreateProjectMutation;
