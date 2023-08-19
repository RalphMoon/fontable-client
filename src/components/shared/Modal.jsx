import styled from "@emotion/styled";

function Modal({ onModalClick, children }) {
  return (
    <Overlay onClick={onModalClick}>
      <StyledModal onClick={(ev) => ev.stopPropagation()}>
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

const StyledModal = styled.div`
  width: ${({ theme }) => theme.glyph.box.width};
  height: ${({ theme }) => theme.glyph.box.height};
  background-color: #fff;
  border-radius: 2px;
`;

export default Modal;
