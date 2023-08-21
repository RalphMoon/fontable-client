import styled from "@emotion/styled";

import PangramWritingPad from "../../features/drawing/components/PangramWritingPad";
import CompleteButton from "../../features/drawing/components/PangramWritingPad/CompleteButton";

function CreateProject() {
  return (
    <Wrapper>
      <Title>
        Write all the sentences below in <strong>lowercase</strong>
      </Title>
      <section css={{ textAlign: "center" }}>
        <StyledPangram>
          The quick brown fox jumps over a lazy dog.
        </StyledPangram>
        <PangramWritingPad />
      </section>
      <div css={{ position: "absolute", right: "7%", bottom: "7%" }}>
        <CompleteButton />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  position: absolute;
  top: 1%;
  color: ${({ theme: { colors } }) => colors.grey.steel};
  font-weight: 400;
  animation: fadein 1s linear;

  strong {
    color: ${({ theme: { colors } }) => colors.crimson};
  }
`;

const StyledPangram = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  font-family: "Inter", sans-serif;
`;

export default CreateProject;
