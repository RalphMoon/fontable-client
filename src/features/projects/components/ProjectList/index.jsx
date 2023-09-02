import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import ProjectThumbnail from "../ProjectThumbnail";

import useProjectListQuery from "../../hooks/useProjectListQuery";
import DeleteButton from "../DeleteButton";

function ProjectList() {
  const { data: projects } = useProjectListQuery();

  return (
    <div css={{ display: "flex", marginTop: "50px" }}>
      {projects.map(({ _id: projectId, name }) => (
        <div
          key={projectId}
          css={{ position: "relative", marginRight: "100px" }}
        >
          <StyledLink to={`/projects/${projectId}`}>
            <ProjectThumbnail />
            <h4 css={{ textAlign: "center" }}>{name}</h4>
          </StyledLink>
          <div css={{ position: "absolute", right: 0, bottom: "18px" }}>
            <DeleteButton projectName={name} projectId={projectId} />
          </div>
        </div>
      ))}
    </div>
  );
}

const StyledLink = styled(Link)`
  padding: 0;
  width: 400px;
  text-decoration: none;
  color: #222;
`;

export default ProjectList;
