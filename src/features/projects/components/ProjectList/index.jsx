import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import ProjectThumbnail from "../ProjectThumbnail";
import Image from "../../../../components/shared/Image";
import Button from "../../../../components/shared/Button";
import DeleteButton from "../DeleteButton";

import useProjectListQuery from "../../hooks/useProjectListQuery";
import { serializedBufferToUrl } from "../../../../utils/dataConversion";

import prevIconUrl from "../../../../assets/prev_icon.svg";
import nextIconUrl from "../../../../assets/next_icon.svg";

function ProjectList() {
  const { data: projects } = useProjectListQuery();
  const [ currentIndex, setCurrentIndex ] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  }

  return (
    <div css={{ display: "flex", justifyContent: "center" }}>
      {currentIndex !== 0 && (
        <Button appearance={buttonStyle} onButtonClick={handlePrev}>
          <Image url={prevIconUrl} />
        </Button>
      )}
      <CarouselContainer>
        <CarouselSlide currentIndex={currentIndex}>
          {projects.map(({ _id: projectId, name, file }) => (
            <div
              key={projectId}
              css={{ position: "relative", margin: "0 50px" }}
              url={serializedBufferToUrl(file)}
            >
              <StyledLink to={`/projects/${projectId}`}>
                <ProjectThumbnail fontFamilyName={name} />
                <h4 css={{ textAlign: "center" }}>{name}</h4>
              </StyledLink>
              <div css={{ position: "absolute", right: 0, bottom: "18px" }}>
                <DeleteButton projectName={name} projectId={projectId} />
              </div>
            </div>
          ))}
        </CarouselSlide>
      </CarouselContainer>
      {projects.length / 4 - 1 > currentIndex && (
        <Button appearance={buttonStyle} onButtonClick={handleNext}>
          <Image url={nextIconUrl} />
        </Button>
      )}
    </div>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  width: 100%;
  overflow: hidden;
  max-width: 1200px;
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  transform: translateX(-${({ currentIndex }) => currentIndex * 1200}px);
  transition: transform 0.9s ease-in-out;
`;

const StyledLink = styled(Link)`
  padding: 0;
  width: 400px;
  text-decoration: none;
  color: #222;
`;

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "transparent",
  boxShadow: "none",
};

export default ProjectList;
