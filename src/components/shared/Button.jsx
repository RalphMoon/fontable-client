import styled from "@emotion/styled";

function Button({ type, onButtonClick, appearance, children }) {
  return (
    <StyledButton
      type={type || "button"}
      onClick={onButtonClick}
      appearance={appearance}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button(
  {
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",
    border: 0,
    borderRadius: "11px",
    marginTop: "15px",
    outline: 0,
    color: "rgba(0, 0, 0, 0.54)",
    boxShadow: "0 2px 3px 2px rgba(0, 0, 0, 0.084)",
    cursor: "pointer",
  },
  ({ appearance }) => appearance
);

export default Button;
