import { useQuery } from "@tanstack/react-query";

import useAuth from "../../authentication/hooks/useAuth";
import { getProjectList } from "../../../utils/api";

function useProjectListQuery() {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;

  const query = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectList(userId),
    enabled: !!userId,
  });

  return query;
}

export default useProjectListQuery;
