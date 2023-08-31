import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import ProjectThumbnail from "../ProjectThumbnail";

import useProjectListQuery from "../../hooks/useProjectListQuery";

function ProjectList() {
  const { data: projects } = useProjectListQuery();

  return (
    <div css={{ display: "flex", marginTop: "50px" }}>
      {projects.map(({ _id: projectId, name }) => (
        <StyledLink to={`/projects/${projectId}`} key={projectId}>
          <ProjectThumbnail />
          <h4 css={{ textAlign: "center" }}>{name}</h4>
        </StyledLink>
      ))}
    </div>
  );
}

const StyledLink = styled(Link)`
  margin-right: 100px;
  padding: 0;
  width: 400px;
  text-decoration: none;
  color: #222;
`;

export default ProjectList;
