import styled from "@emotion/styled";

function Toggle({ toggleEnabled, onToggleClick, children }) {
  return (
    <ToggleSwitch onClick={onToggleClick}>
      <StyledToggle enabled={toggleEnabled}>
        <strong css={{ fontSize: "25px" }}>{children}</strong>
      </StyledToggle>
    </ToggleSwitch>
  );
}

const ToggleSwitch = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  border-radius: 100px;
  background-color: #222;
  cursor: pointer;
`;

const StyledToggle = styled.div(
  {
    position: "absolute",
    top: "5px",
    left: "5px",
    width: "40px",
    height: "40px",
    background: "#fff",
    borderRadius: "90px",
    transition: "0.3s",
    textAlign: "center",
  },
  ({ enabled }) => {
    if (enabled) {
      return {
        transform: "translateX(120%)",
      };
    }

    return {};
  }
);

export default Toggle;
