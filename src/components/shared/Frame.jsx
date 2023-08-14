import styled from "@emotion/styled";

function Frame({ children }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <StyledDiv />
      <h4 css={{ marginTop: "5px", cursor: "pointer" }}>{children}</h4>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 7vw;
  height: 13vh;
  margin: 0;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
`;

export default Frame;
