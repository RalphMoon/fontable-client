import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useSetAtom } from "jotai";

import useAuth from "../../authentication/hooks/useAuth";
import { unicodePathsAtom } from "../../../lib/jotai";
import { getProject } from "../../../utils/api";

function useProjectQuery() {
  const { currentUser } = useAuth();
  const { pathname } = useLocation();
  const userId = currentUser?.uid;
  const setUnicodePaths = useSetAtom(unicodePathsAtom);

  const query = useQuery({
    queryKey: [ "project", userId, pathname ],
    queryFn: () => getProject(userId, pathname),
    onSuccess: (data) => setUnicodePaths(data.unicodePaths),
    enabled: !!userId,
  });

  return query;
}

export default useProjectQuery;
