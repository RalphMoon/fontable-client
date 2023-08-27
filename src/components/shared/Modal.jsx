import styled from "@emotion/styled";

function Modal({ onModalClick, appearance, children }) {
  return (
    <Overlay onClick={onModalClick}>
      <StyledModal
        onClick={(ev) => ev.stopPropagation()}
        appearance={appearance}
      >
        {children}
      </StyledModal>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div(
  {
    backgroundColor: "#fff",
    borderRadius: "2px",
  },
  ({ appearance }) => appearance
);

export default Modal;
