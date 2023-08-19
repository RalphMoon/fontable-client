import styled from "@emotion/styled";

function Frame({ unicode, onFrameClick, children }) {
  return (
    <Wrapper role="button" aria-hidden="true" onClick={onFrameClick}>
      <StyledFrame>{children}</StyledFrame>
      <h4 css={{ marginTop: "5px", cursor: "pointer" }}>
        {String.fromCharCode(unicode)}
      </h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
`;

const StyledFrame = styled.div`
  width: 7vw;
  height: 13vh;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadows.frame};
  cursor: pointer;
`;

export default Frame;
