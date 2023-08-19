import styled from "@emotion/styled";

import { useState } from "react";
import { createPortal } from "react-dom";

import Header from "./components/Header";
import AlphabetGallery from "./components/AlphabetGallery";
import Modal from "../../components/shared/Modal";
import DrawingPad from "../../features/drawing/components/DrawingPad";

function CharacterGallery() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ menuCode, setMenuCode ] = useState(97);
  const portalRoot = document.getElementById("portal-root");

  function handleMenu(unicode) {
    setMenuCode(unicode);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header onMenuClick={handleMenu} />
      <StyledMain>
        {menuCode === 97 && <AlphabetGallery openModal={openModal} />}
      </StyledMain>
      {isOpen &&
        createPortal(
          <Modal onModalClick={closeModal}>
            <DrawingPad />
          </Modal>,
          portalRoot
        )}
    </>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(7, 0.5fr);
  margin-top: 30px;
  align-items: center;
`;

export default CharacterGallery;
