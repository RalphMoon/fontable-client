import { createPortal } from "react-dom";
import styled from "@emotion/styled";

function Modal({ onModalClick, appearance, children }) {
  const portalRoot = document.getElementById("portal-root");

  return createPortal(
    <Overlay onClick={onModalClick}>
      <StyledModal
        onClick={(ev) => ev.stopPropagation()}
        appearance={appearance}
      >
        {children}
      </StyledModal>
    </Overlay>,
    portalRoot
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
    borderRadius: "2px",
  },
  ({ appearance }) => appearance
);

export default Modal;
