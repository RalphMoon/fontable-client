import styled from "@emotion/styled";

function Frame({ unicode, onFrameClick, children }) {
  return (
    <div
      role="button"
      aria-hidden="true"
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
      onClick={onFrameClick}
    >
      <StyledDiv>{children}</StyledDiv>
      <h4 css={{ marginTop: "5px", cursor: "pointer" }}>
        {String.fromCharCode(unicode)}
      </h4>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 7vw;
  height: 13vh;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadows.frame};
  cursor: pointer;
`;

export default Frame;
